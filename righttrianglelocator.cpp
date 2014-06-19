#include"righttrianglelocator.h"
#include<QDebug>

RightTriangleLocator::RightTriangleLocator(QWidget *parent) : Daddy(parent)
{
    GenerationRay(TRIANGLE_ANGLE);
}

RightTriangleLocator::~RightTriangleLocator()
{

}

void RightTriangleLocator::GenerationRadians(void)
{
    for(quint16 i=0u;i<ROUND_DEGREE;i++)
    {
        radians[i].angle=GetRadianValue(i);
        radians[i].x=qFastCos(radians[i].angle);
        radians[i].y=qFastSin(radians[i].angle);
    }
}

void RightTriangleLocator::DrawStation(void)const
{
    glScalef(1.0f,4.5f,1.0f);
    glTranslatef(-qFastCos(GetRadianValue(-TRIANGLE_ANGLE)),qFastSin(GetRadianValue(-TRIANGLE_ANGLE)),.0f);
    glTranslatef(0.18,.0f,.0f);
    glScalef(1.6f,2.0f,1.0f);
    //glLineWidth(2.0f*settings["system"]["focus"].toDouble());
    glLineWidth(2.0);
    QColor color=Color;
    //color.setAlphaF(settings["system"]["brightness"].toDouble());
    qglColor(color);
    glBegin(GL_LINES);
        glVertex2f(.0f,.0f);
        glVertex2f(qFastCos(GetRadianValue(-TRIANGLE_ANGLE)),qFastSin(GetRadianValue(0)));

        glVertex2f(.0f,.0f);
        glVertex2f(qFastCos(GetRadianValue(TRIANGLE_ANGLE)),qFastSin(GetRadianValue(TRIANGLE_ANGLE)));

        glVertex2f(.15f,.0f);
        glVertex2f(qFastCos(GetRadianValue(TRIANGLE_ANGLE)),qFastSin(GetRadianValue(2.7)));

        glVertex2f(qFastCos(GetRadianValue(-TRIANGLE_ANGLE)),qFastSin(GetRadianValue(0)));
        glVertex2f(qFastCos(GetRadianValue(TRIANGLE_ANGLE)),qFastSin(GetRadianValue(TRIANGLE_ANGLE)));
    glEnd();
}

void RightTriangleLocator::InitLocatorGrid(void)const{}
void RightTriangleLocator::ContinueSearch(void){}

template<typename T>T RightTriangleLocator::CalcScaleValue(const T value,RightTriangleLocator::Scale scale) const
{
    return static_cast<T>(value)/scale;
}

template<typename T>T RightTriangleLocator::CalcScaleValue(const T value)const
{
    return CalcScaleValue(value,scale);
}

RightTriangleLocator::Azimuth RightTriangleLocator::GetCurrentAzimuthMode(void)const
{
    return azimuth;
}

void RightTriangleLocator::SetCurrentAzimuthMode(const RightTriangleLocator::Azimuth a)
{
    azimuth=a;
}

RightTriangleLocator::Range RightTriangleLocator::GetCurrentRangeMode(void)const
{
    return range;
}

void RightTriangleLocator::SetCurrentRangeMode(const RightTriangleLocator::Range r)
{
    range=r;
}


RightTriangleLocator::Scale RightTriangleLocator::GetCurrentScaleMode(void)const
{
    return scale;
}

void RightTriangleLocator::SetCurrentScaleMode(const RightTriangleLocator::Scale s)
{
    scale=s;
}

RightTriangleLocator::WorkMode RightTriangleLocator::GetCurrentWorkMode(void)const
{
    return work_mode;
}

void RightTriangleLocator::SetCurrentWorkMode(const RightTriangleLocator::WorkMode wm)
{
    work_mode=wm;
}

void RightTriangleLocator::GenerationRange(void)
{
    for(qreal r=.0f;r<=1u;r+=1)
    {

    }
}

void RightTriangleLocator::DrawRange(void)const
{
}

void RightTriangleLocator::GenerationAzimuth(void)
{

}

void RightTriangleLocator::DrawAzimuth(void)const
{

}
