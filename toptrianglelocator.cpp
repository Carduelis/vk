#include"toptrianglelocator.h"
#include<QDebug>

TopTriangleLocator::TopTriangleLocator(QWidget *parent) : Daddy(parent)
{
    GenerationRadians();
    GenerationRay(2u*TRIANGLE_ANGLE+1);
}

TopTriangleLocator::~TopTriangleLocator()
{

}

void TopTriangleLocator::GenerationRadians(void)
{
    delete radians;
    radians=new Points[2u*TRIANGLE_ANGLE+1];
    qint16 a=0u;
    for(quint16 i=0u;i<=2u*TRIANGLE_ANGLE;i++)
    {
        a=i-TRIANGLE_ANGLE;
        radians[i].angle=GetRadianValue(a);
        radians[i].x=qFastCos(GetRadianValue(TRIANGLE_ANGLE));
        radians[i].y=qFastSin(radians[i].angle);
    }
}

void TopTriangleLocator::DrawStation(void)const
{
    qreal rad=GetRadianValue(TRIANGLE_ANGLE),
          rad1=GetRadianValue(-TRIANGLE_ANGLE),
          sin=qFastSin(rad),
          cos=qFastCos(rad),
          sin1=qFastSin(rad1),
          cos1=qFastCos(rad1);
    glRotatef(270.0f,.0f,.0f,1.0f);
    glTranslatef(GRID_OFFSET,.0f,.0f);
    glScalef(1.7f,3.15f,1.0f);
    //glScalef(1.7f,3.7f,1.0f);
    glLineWidth(2.0f*settings["system"]["focus"].toDouble());
    QColor color=Color;
    color.setAlphaF(settings["system"]["brightness"].toDouble());
    qglColor(color);
    glBegin(GL_LINES);
        glVertex2f(.0f,.0f);
        glVertex2f(cos1,sin1);

        glVertex2f(.0f,.0f);
        glVertex2f(cos,sin);

        glVertex2f(.0f,.0f);
        glVertex2f(cos,qFastSin(GetRadianValue(10)));

        glVertex2f(cos1,sin1);
        glVertex2f(cos,sin);
    glEnd();
}

void TopTriangleLocator::InitLocatorGrid(void)const{}

void TopTriangleLocator::ContinueSearch(void)
{
    updateGL();
    if(ray_position==ray.end()-1u)
    {
        clockwise=!clockwise; //Для обращения в другую сторону!
        GenerationRay(2u*TRIANGLE_ANGLE+1);
        ray_position=ray.begin();
    }
    ray_position++;
}

template<typename T>T TopTriangleLocator::CalcScaleValue(const T value,TopTriangleLocator::Scale scale) const
{
    return static_cast<T>(value)/scale;
}

template<typename T>T TopTriangleLocator::CalcScaleValue(const T value)const
{
    return CalcScaleValue(value,scale);
}

TopTriangleLocator::Azimuth TopTriangleLocator::GetCurrentAzimuthMode(void)const
{
    return azimuth;
}

void TopTriangleLocator::SetCurrentAzimuthMode(const TopTriangleLocator::Azimuth a)
{
    azimuth=a;
    GenerationAzimuth();
}

TopTriangleLocator::Range TopTriangleLocator::GetCurrentRangeMode(void)const
{
    return range;
}

void TopTriangleLocator::SetCurrentRangeMode(const TopTriangleLocator::Range r)
{
    range=r;
    GenerationRange();
}


TopTriangleLocator::Scale TopTriangleLocator::GetCurrentScaleMode(void)const
{
    return scale;
}

void TopTriangleLocator::SetCurrentScaleMode(const TopTriangleLocator::Scale s)
{
    scale=s;
    GenerationRange();
}

TopTriangleLocator::WorkMode TopTriangleLocator::GetCurrentWorkMode(void)const
{
    return work_mode;
}

void TopTriangleLocator::SetCurrentWorkMode(const TopTriangleLocator::WorkMode wm)
{
    work_mode=wm;
}

void TopTriangleLocator::GenerationRange(void)
{
    S.range[scale].clear();
    quint8 j=0u,d=0u;
    qreal delta=CalcScaleValue(static_cast<qreal>(range));

    switch(range)
    {
        case Range::R_NO:
            return;
        case Range::R_FIRST:
            j=2u;
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
        cache.Coordinates=new Points[2u*TRIANGLE_ANGLE+1];
        c=0u;
        for(Points *i=radians,*e=radians+2u*TRIANGLE_ANGLE+1;i<e;i++,c++)
        {
            cache.Coordinates[c].angle=i->angle;
            cache.Coordinates[c].x=r*i->x;
            cache.Coordinates[c].y=r*i->y;
        }
        S.range[scale].append(cache);
    }
    Current.range=&S.range[scale];
}

void TopTriangleLocator::DrawRange(void)const
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
            for(Points *i=it->Coordinates,*e=it->Coordinates+2u*TRIANGLE_ANGLE+1;i<e;i++)
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
}

void TopTriangleLocator::GenerationAzimuth(void)
{
    S.azimuth.clear();
    if(azimuth==Azimuth::A_NO)
        return;

    CenterStraightLine cache;
    for(Points *i=radians,*e=radians+2u*TRIANGLE_ANGLE+1;i<e;i+=azimuth)
    {
        cache.width=(i-radians)%A_SECOND>0u ? 1.0f : 3.5f;
        cache.Coordinates.angle=i->angle;
        cache.Coordinates.x=i->x;
        cache.Coordinates.y=i->y;
        S.azimuth.append(cache);
    }
    Current.azimuth=&S.azimuth;
}

void TopTriangleLocator::DrawAzimuth(void)const
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
}
