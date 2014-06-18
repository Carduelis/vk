#include"mainlocator.h"
#include<QDebug>

MainLocator::MainLocator(QWidget *parent) : Daddy(parent)
{
    GenerationRay();
}

MainLocator::~MainLocator()
{
    if(IsActive())
        killTimer(timer.timerId());
}

void MainLocator::GenerationRadians(bool)
{
    qreal amplitude=settings["scan"]["amplitude"].toDouble();
    //qDebug()<<amplitude;
    for(quint16 i=0u;i<ROUND_DEGREE;i++)
    {
        radians[i].angle=GetRadianValue(i);
        radians[i].x=amplitude>.0f ? qFastCos(radians[i].angle)*amplitude : qFastCos(radians[i].angle);
        radians[i].y=amplitude<.0f ? qFastSin(radians[i].angle)*(-amplitude) : qFastSin(radians[i].angle);
    }
}

void MainLocator::DrawStation(void)const
{
    glRotatef(30.0f,.0f,.0f,1.0f);
    //glLineWidth(2.0f*settings["system"]["focus"].toDouble());
    glColor3f(static_cast<GLfloat>(.925f),static_cast<GLfloat>(.714f),static_cast<GLfloat>(.262f));
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
    glRotatef(-30.0f,.0f,.0f,1.0f);
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
}

MainLocator::Range MainLocator::GetCurrentRangeMode(void)const
{
    return range;
}

void MainLocator::SetCurrentRangeMode(const MainLocator::Range r)
{
    range=r;
}


MainLocator::Scale MainLocator::GetCurrentScaleMode(void)const
{
    return scale;
}

void MainLocator::SetCurrentScaleMode(const MainLocator::Scale s)
{
    scale=s;
}

MainLocator::WorkMode MainLocator::GetCurrentWorkMode(void)const
{
    return work_mode;
}

void MainLocator::SetCurrentWorkMode(const MainLocator::WorkMode wm)
{
    work_mode=wm;
}
