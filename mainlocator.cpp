#include"mainlocator.h"
#include<QDebug>

MainLocator::MainLocator(QWidget *parent) : Daddy(parent)
{
    S.range.clear();
    S.azimuth.clear();
    GenerationRay();
}

MainLocator::~MainLocator()
{

}

void MainLocator::GenerationRadians(void)
{
    for(quint16 i=0u;i<ROUND_DEGREE;i++)
    {
        radians[i].angle=GetRadianValue(i);
        radians[i].x=qFastCos(radians[i].angle);
        radians[i].y=qFastSin(radians[i].angle);
    }
}


void MainLocator::GenerationRadians(bool)
{
    for(quint16 i=0u;i<ROUND_DEGREE;i++)
    {
        radians[i].angle=GetRadianValue(i);
        radians[i].x=qFastCos(radians[i].angle)*circle.at(circle_counter).x;
        radians[i].y=qFastSin(radians[i].angle)*circle.at(circle_counter).y;
    }
}

void MainLocator::DrawStation(void)const
{
    glRotatef(LOCATOR_ROTATE_ANGLE,.0f,.0f,1.0f);
    glLineWidth(2.0f*settings["system"]["focus"].toDouble());
    QColor color=Color;
    color.setAlphaF(settings["system"]["brightness"].toDouble());
    qglColor(color);
    qreal
        rx=CalcScaleValue(5.0f),
        ry=2u*rx;
    glTranslatef(rx,.0f,.0f);
    glBegin(GL_LINES);
        glVertex2d(-rx,-ry);
        glVertex2d(-rx,ry);

        glVertex2d(-rx,ry);
        glVertex2d(rx,ry);

        glVertex2d(-rx,-ry);
        glVertex2d(rx,-ry);

        glVertex2d(rx,-ry);
        glVertex2d(rx,ry);
    glEnd();
    glTranslatef(-rx,.0f,.0f);
    glRotatef(-LOCATOR_ROTATE_ANGLE,.0f,.0f,1.0f);
}

void MainLocator::InitLocatorGrid(void)const
{
    glRotatef(90.0f,.0f,.0f,1.0f);
}

void MainLocator::ContinueSearch(void)
{
    updateGL();
    if(ray_position==ray.end()-1u)
    {
        ray_position=ray.begin();
        //Impulse (Temporary: It's time to hitrozhop hacks)
        if(!S.active_insync_trash[scale].isEmpty())
            S.active_insync_trash[scale].pop_front();
    }
    ray_position++;
}

template<typename T>T MainLocator::CalcScaleValue(const T value,MainLocator::Scale scale) const
{
    return static_cast<T>(value)/scale;
}

template<typename T>T MainLocator::CalcScaleValue(const T value)const
{
    return CalcScaleValue(value,scale);
}

MainLocator::Azimuth MainLocator::GetCurrentAzimuthMode(void)const
{
    return azimuth;
}

void MainLocator::SetCurrentAzimuthMode(const MainLocator::Azimuth a)
{
    azimuth=a;
    GenerationAzimuth();
}

MainLocator::Range MainLocator::GetCurrentRangeMode(void)const
{
    return range;
}

void MainLocator::SetCurrentRangeMode(const MainLocator::Range r)
{
    range=r;
    GenerationRange();
}


MainLocator::Scale MainLocator::GetCurrentScaleMode(void)const
{
    return scale;
}

void MainLocator::SetCurrentScaleMode(const MainLocator::Scale s)
{
    scale=s;
    GenerationRange();
    GenerationLocalItems();
    GenerationMeteo();
}

MainLocator::WorkMode MainLocator::GetCurrentWorkMode(void)const
{
    return work_mode;
}

void MainLocator::SetCurrentWorkMode(const MainLocator::WorkMode wm)
{
    work_mode=wm;
}

void MainLocator::GenerationRange(void)
{
    S.range[scale].clear();
    quint8 j=0u,d=0u;
    qreal delta=CalcScaleValue(static_cast<qreal>(range));

    switch(range)
    {
        case Range::R_NO:
            return;
        case Range::R_FIRST:
            j=5u;
            break;
        case Range::R_SECOND:
        default:
            j=1u;
    }

    RoundLine cache;
    quint16 c=0u;
    for(qreal r=.0f;r<=1.0f;r+=delta,d++)
    {
        cache.width=d%j==0u ? 3.5f : 1.0f;
        cache.Coordinates=new Points[ROUND_DEGREE];
        c=0u;
        for(Points *i=radians,*e=radians+ROUND_DEGREE;i<e;i++,c++)
        {
            cache.Coordinates[c].angle=i->angle;
            cache.Coordinates[c].x=r*i->x;
            cache.Coordinates[c].y=r*i->y;
        }
        S.range[scale].append(cache);
    }
    Current.range=&S.range[scale];
}

void MainLocator::DrawRange(void)const
{
    if(Current.range->isEmpty())
        return;
    qreal alpha,
          focus=settings["system"]["focus"].toDouble(),
          brightness=settings["brightness"]["range"].isValid() ? settings["brightness"]["range"].toDouble() : 1.0f;
    brightness*=settings["system"]["brightness"].toDouble();
    QColor color=Color;
    for(QVector<RoundLine>::const_iterator it=(*Current.range).begin(),end=(*Current.range).end();it<end;it++)
    {
        glLineWidth(it->width*focus);
        glBegin(GL_LINE_STRIP);
            for(Points *i=it->Coordinates,*e=it->Coordinates+ROUND_DEGREE;i<e;i++)
            {
                alpha=CalcAlpha(i->angle);
                if(alpha>.0f)
                {
                    alpha=alpha<settings["system"]["lightning"].toDouble() ? 1.0f : settings["system"]["lightning"].toDouble()/alpha;
                    color.setAlphaF(alpha*brightness);
                    qglColor(color);
                    glVertex2f(i->x,i->y);
                }
            }
        glEnd();
    }
    /*
    for(QVector<RoundLine>::const_iterator it=Cache.range[scale].begin(),end=Cache.range[scale].end();it<end;it++)
    {
        glLineWidth(it->width);
        glBegin(GL_LINE_STRIP);
            for(Points *i=it->Coordinates,*e=it->Coordinates+ROUND_DEGREE;i<e;i++)
                glVertex2f(i->x,i->y);
        glEnd();
    }
    */
}

void MainLocator::GenerationAzimuth(void)
{
    S.azimuth.clear();
    if(azimuth==Azimuth::A_NO)
        return;

    CenterStraightLine cache;
    for(Points *i=radians,*e=radians+ROUND_DEGREE;i<e;i+=azimuth)
    {
        cache.width=(i-radians)%A_SECOND>0u ? 1.0f : 3.5f;
        cache.Coordinates.angle=i->angle;
        cache.Coordinates.x=i->x;
        cache.Coordinates.y=i->y;
        S.azimuth.append(cache);
    }
    Current.azimuth=&S.azimuth;
}

void MainLocator::DrawAzimuth(void)const
{
    if(Current.azimuth->isEmpty())
        return;
    qreal alpha,
          focus=settings["system"]["focus"].toDouble(),
          brightness=settings["brightness"]["azimuth"].isValid() ? settings["brightness"]["azimuth"].toDouble() : 1.0f;
    brightness*=settings["system"]["brightness"].toDouble();
    QColor color=Color;
    for(QVector<CenterStraightLine>::const_iterator it=Current.azimuth->begin(),end=Current.azimuth->end();it<end;it++)
    {
        alpha=CalcAlpha(it->Coordinates.angle);
        if(alpha>.0f)
        {
            alpha=alpha<settings["system"]["lightning"].toDouble() ? 1.0f : settings["system"]["lightning"].toDouble()/alpha;
            glLineWidth(it->width*focus);
            glBegin(GL_LINES);
                color.setAlphaF(brightness*alpha);
                qglColor(color);
                glVertex2f(.0f,.0f);
                glVertex2f(it->Coordinates.x,it->Coordinates.y);
            glEnd();
        }
    }
    /*
    for(QVector<CenterStraightLine>::const_iterator it=Cache.azimuth.begin(),end=Cache.azimuth.end();it<end;it++)
    {
        glLineWidth(it->width);
        glBegin(GL_LINES);
            glVertex2f(.0f,.0f);
            glVertex2f(it->Coordinates.x,it->Coordinates.y);
        glEnd();
    }*/
}

void MainLocator::GenerationTrash(void)
{
    CreateEllipseTrashArea(S.trash[scale],settings["trash"]["begin"].toDouble(),settings["trash"]["end"].toDouble(),.0f,.0f,settings["trash"]["intensity"].toDouble());
}

void MainLocator::DrawTrash(void)const
{
    DrawEllipseTrashArea(S.trash[scale],2u);
}

void MainLocator::GenerationLocalItems(void)
{
    CreateEllipseTrashArea(S.local_items[scale],.0f,15.0f,.0f,.0f);
}

void MainLocator::DrawLocalItems(void)const
{
    DrawEllipseTrashArea(S.local_items[scale],8u);
}

void MainLocator::CreateEllipseTrashArea(QVector<PointsR>&storage,qreal begin,qreal end,qreal offset_x,qreal offset_y,qreal intensity,bool ellipse,bool clear)
{
    qreal rand;
    begin=CalcScaleValue(begin),
    end=CalcScaleValue(end);
    if(clear)
        storage.clear();
    PointsR cache;
    for(Points*i=radians,*k=radians+ROUND_DEGREE;i<k;i++)
    {
        for(quint16 l=0u,t=fmod(qrand(),intensity);l<t;l++)
        {
            if(ellipse)
            {
                rand=begin+fmod(GetRandomCoord(4u),end-begin);
                cache.x=i->x*rand+CalcScaleValue(offset_x)+GetRandomSign();//*CalcScaleValue(offset_x*rand);
                rand=begin+fmod(GetRandomCoord(4u),end-begin);
                cache.y=i->y*rand+CalcScaleValue(offset_y)+GetRandomSign();//*CalcScaleValue(offset_y*rand);
            }
            else
            {
                rand=begin+fmod(GetRandomCoord(4u),end-begin);
                cache.x=i->x*rand+CalcScaleValue(offset_x);
                cache.y=i->y*rand+CalcScaleValue(offset_y);
            }
            cache.r=qSqrt(qPow(cache.x,2u)+qPow(cache.y,2u));
            if(offset_x>.0f || offset_y>.0f)
                if(cache.x==0)
                    cache.angle=M_PI/2;
                else
                    cache.angle=qAtan2(cache.y,cache.x);
            else
                cache.angle=i->angle;
            storage.append(cache);
        }
    }
}

void MainLocator::DrawEllipseTrashArea(QVector<PointsR>storage,quint8 size)const
{
    glPointSize(size*settings["system"]["focus"].toDouble());
    glEnable(GL_ALPHA_TEST);
    qreal alpha;
    QColor color=Color;
    for(QVector<PointsR>::const_iterator it=storage.begin();it<storage.end();it++)
    {
        alpha=CalcAlpha(it->angle);
        if(alpha>.0f)
        {
            alpha=alpha<settings["system"]["lightning"].toDouble() ? 1.0f : settings["system"]["lightning"].toDouble()/alpha;
            alpha*=settings["system"]["brightness"].toDouble()+it->r-settings["system"]["varu"].toDouble();
            alpha*=settings["system"]["brightness"].toDouble();
            color.setAlphaF(alpha>1u ? 1.0f : alpha<.0f ? .0f : alpha);
            glBegin(GL_POINTS);
                qglColor(color);
                glVertex2f(it->x,it->y);
            glEnd();
        }
    }
}

void MainLocator::GenerationMeteo(void)
{
    CreateEllipseTrashArea(S.meteo[scale],20.0f,20.0f,3u,true);
    CreateEllipseTrashArea(S.meteo[scale],-20.0f,20.0f,3u,true,false);
    CreateEllipseTrashArea(S.meteo[scale],-30.0f,-30.0f,3u,true,false);
    CreateEllipseTrashArea(S.meteo[scale],-50.0f,-10.0f,3u,true,false);
}

void MainLocator::DrawMeteo(void)const
{
    DrawEllipseTrashArea(S.meteo[scale],5);
}

void MainLocator::GenerationActiveNoiseTrash(void)
{
    quint8 density=17;
    qint16 angle;
    S.active_noise_trash.clear();

    RoundLine cache;
    switch(settings["active_noise_trash"]["intensity"].toUInt())
    {
        case 0:
            angle=settings["active_noise_trash"]["azimuth"].toUInt();
            for(Points*i=radians+ROUND_DEGREE-angle,*k=radians+ROUND_DEGREE-angle+20;i<k;i++)
            {
                cache.Coordinates=new Points[1];
                cache.Coordinates->angle=i->angle;
                cache.Coordinates->x=i->x;
                cache.Coordinates->y=i->y;
                cache.width=GetRandomCoord(4)*density;
                S.active_noise_trash.append(cache);
            }
            if(angle<20)
                for(Points*i=radians,*k=radians+20-angle;i<k;i++)
                {
                    cache.Coordinates=new Points[1];
                    cache.Coordinates->angle=i->angle;
                    cache.Coordinates->x=i->x;
                    cache.Coordinates->y=i->y;
                    cache.width=GetRandomCoord(4)*density;
                    S.active_noise_trash.append(cache);
                }
                break;
        case 1:
        /*
            Этот кусок кода я написал в семь утра, сидя в электричке после бессонной ночи, плохо понимая, что я вообще делаю.
            Я не имею ни малейшего представления как и почему оно работает, но вроде работает =)
        */
            angle=settings["active_noise_trash"]["azimuth"].toUInt();
            for(quint16 a=0,j=0;a<360;a+=100,j++)
                for(Points*i=radians+ROUND_DEGREE-angle+a,*k=radians+ROUND_DEGREE-angle+a+20;i<k;i++)
                {
                    cache.Coordinates=new Points[1];
                    cache.Coordinates->angle=i->angle;
                    cache.Coordinates->x=i->x;
                    cache.Coordinates->y=i->y;
                    cache.width=GetRandomCoord(4)*density;
                    if(j%3==0)
                        cache.width/=5;
                    S.active_noise_trash.append(cache);
                }
                break;
            case 2:
            /*
             Этот кусок кода я написал в семь утра, сидя в электричке после бессонной ночи, плохо понимая, что я вообще делаю.
             Я не имею ни малейшего представления как и почему оно работает, но вроде работает =)
            */
                angle=settings["active_noise_trash"]["azimuth"].toUInt();
                for(quint16 a=0,j=0;a<360;a+=40,j++)
                    for(Points*i=radians+ROUND_DEGREE-angle+a,*k=radians+ROUND_DEGREE-angle+a+20;i<k;i++)
                    {
                        cache.Coordinates=new Points[1];
                        cache.Coordinates->angle=i->angle;
                        cache.Coordinates->x=i->x;
                        cache.Coordinates->y=i->y;
                        cache.width=GetRandomCoord(4)*density;
                        if(j%3==0)
                            cache.width/=5;
                        S.active_noise_trash.append(cache);
                    }
            break;
        }
}

void MainLocator::DrawActiveNoiseTrash(void)const
{
    qreal alpha;
    QColor color=Color;
    for(QVector<RoundLine>::const_iterator it=S.active_noise_trash.begin();it<S.active_noise_trash.end();it++)
    {
        alpha=CalcAlpha(it->Coordinates->angle);
        if(alpha>0)
        {
            glLineWidth(it->width*settings["system"]["focus"].toDouble());
            alpha=alpha<settings["system"]["lightning"].toDouble() ? 1.0f : settings["system"]["lightning"].toDouble()/alpha;
            glBegin(GL_LINES);
            color.setAlphaF(alpha>1u ? 1.0f : alpha<.0f ? .0f : alpha);
            qglColor(color);
            glVertex2d(.0f,.0f);
            glVertex2f(it->Coordinates->x,it->Coordinates->y);
            glEnd();
        }
    }
}

void MainLocator::GenerationActiveAnswerTrash(void)
{
    //Crash fixes
    if(!settings["active_answer_trash"]["distance"].isValid() || settings["active_answer_trash"]["distance"]<=.0f)
        return;

    qreal r=.0f,delta;
    S.active_answer_trash[scale].clear();

    delta=CalcScaleValue(settings["active_answer_trash"]["distance"].toDouble());
    /*
    switch(settings["system"]["range"].toUInt())
    {
        case 1:
            delta=distance*10u;
            break;
        case 0:
            return;
        default:
            delta=distance*50u;
    }
    */

    RoundLineR cache;
    quint16 c,
            angle=settings["active_answer_trash"]["azimuth"].toUInt();
    while(r<=1.0f)
    {
        cache.width=6.5f;
        cache.Coordinates=new PointsR[TARGET_LENGTH];
        c=0u;

        for(Points *i=radians+ROUND_DEGREE-angle,*end=radians+ROUND_DEGREE-angle+TARGET_LENGTH;i<end;i++,c++)
        {
            cache.Coordinates[c].angle=i->angle;
            cache.Coordinates[c].r=r;
            cache.Coordinates[c].x=cache.Coordinates[c].r*i->x;
            cache.Coordinates[c].y=cache.Coordinates[c].r*i->y;
        }
        S.active_answer_trash[scale].append(cache);
        r+=delta;
    }
}

void MainLocator::DrawActiveAnswerTrash(void)const
{
    qreal alpha,brightness;
    brightness=1.0f;
    QColor color=Color;
    for(QVector<RoundLineR>::const_iterator it=S.active_answer_trash[scale].begin();it<S.active_answer_trash[scale].end();it++)
    {
        glLineWidth(it->width*settings["system"]["focus"].toDouble()*brightness);
        glBegin(GL_LINE_STRIP);
        for(PointsR *i=it->Coordinates,*end=it->Coordinates+TARGET_LENGTH;i<end;i++)
        {
            alpha=CalcAlpha(i->angle);
            if(alpha>.0f)
            {
                alpha=alpha<settings["system"]["lightning"].toDouble() ? 1.0f : settings["system"]["lightning"].toDouble()/alpha;
                alpha*=(settings["system"]["brightness"].toDouble()+i->r-settings["system"]["varu"].toDouble());
                color.setAlphaF(alpha>1u ? 1.0f : alpha<.0f ? .0f : alpha);
                qglColor(color);
                glVertex2d(i->x,i->y);
            }
        }
        glEnd();
    }
}

void MainLocator::GenerationActiveInSyncTrash(void)
{
    //if(!settings["active_insync_trash"]["distance"].isValid() || settings["active_insync_trash"]["distance"]<=.0f)
        //return;

    qreal r=.0f,delta;
    S.active_insync_trash[scale].clear();

    delta=CalcScaleValue(3.0f);//CalcScaleValue(settings["active_insync_trash"]["distance"].toDouble());
    /*
    switch(settings["system"]["range"].toUInt())
    {
        case 1:
            delta=distance*10u;
            break;
        case 0:
            return;
        default:
            delta=distance*50u;
    }
    */

    RoundLineR cache;
    quint16 c,a=0u,
            angle=50u;//settings["active_insync_trash"]["azimuth"].toUInt();
    while(r<=1.0f)
    {
        cache.width=6.5f;
        cache.Coordinates=new PointsR[TARGET_LENGTH];
        c=0u;

        for(Points *i=radians+ROUND_DEGREE-angle-a,*end=radians+ROUND_DEGREE-angle+TARGET_LENGTH-a;i<end;i++,c++)
        {
            cache.Coordinates[c].angle=i->angle;
            cache.Coordinates[c].r=r;
            cache.Coordinates[c].x=cache.Coordinates[c].r*i->x;
            cache.Coordinates[c].y=cache.Coordinates[c].r*i->y;
        }
        S.active_insync_trash[scale].append(cache);
        r+=delta;
        a++;
    }
    S.active_insync_trash[scale].pop_front();
}

void MainLocator::DrawActiveInSyncTrash(void)const
{
    qreal alpha,brightness;
    brightness=1.0f;
    QColor color=Color;
    //for(QVector<LineEntityR>::const_iterator it=Cache.active_insync_trash.begin();it<Cache.active_insync_trash.end();it++)
    QVector<RoundLineR>::const_iterator it=S.active_insync_trash[scale].begin();
    {
        glLineWidth(it->width*settings["system"]["focus"].toDouble()*brightness);
        glBegin(GL_LINE_STRIP);
        for(PointsR *i=it->Coordinates,*end=it->Coordinates+TARGET_LENGTH;i<end;i++)
        {
            alpha=CalcAlpha(i->angle);
            if(alpha>.0f)
            {
                alpha=alpha<settings["system"]["lightning"].toDouble() ? 1.0f : settings["system"]["lightning"].toDouble()/alpha;
                alpha*=settings["system"]["brightness"].toDouble()+i->r-settings["system"]["varu"].toDouble();
                color.setAlphaF(alpha>1u ? 1.0f : alpha<.0f ? .0f : alpha);
                qglColor(color);
                glVertex2d(i->x,i->y);
            }
        }
        glEnd();
    }
}

qreal MainLocator::CalcAlpha(qreal angle)const
{
    qreal alpha;
    if(IsAllVisible())
        alpha=1.0f;
    else
    {
        alpha=(clockwise ? -1 : 1)*((*ray_position)->angle-angle);
        if(alpha<.0f)
            alpha+=2u*M_PI;
    }
    return alpha;
}
