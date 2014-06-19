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
}

TopTriangleLocator::Range TopTriangleLocator::GetCurrentRangeMode(void)const
{
    return range;
}

void TopTriangleLocator::SetCurrentRangeMode(const TopTriangleLocator::Range r)
{
    range=r;
}


TopTriangleLocator::Scale TopTriangleLocator::GetCurrentScaleMode(void)const
{
    return scale;
}

void TopTriangleLocator::SetCurrentScaleMode(const TopTriangleLocator::Scale s)
{
    scale=s;
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
    for(qreal r=.0f;r<=1u;r+=1)
    {

    }
}

void TopTriangleLocator::DrawRange(void)const
{
}

void TopTriangleLocator::GenerationAzimuth(void)
{

}

void TopTriangleLocator::DrawAzimuth(void)const
{

}
