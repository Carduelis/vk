#include"righttrianglelocator.h"
#include<QDebug>

RightTriangleLocator::RightTriangleLocator(QWidget *parent) : Daddy(parent)
{

}

RightTriangleLocator::~RightTriangleLocator()
{

}

void RightTriangleLocator::GenerationRadians(bool)
{
    for(quint16 i=0u;i<ROUND_DEGREE;i++)
    {
        radians[i].angle=GetRadianValue(i);
        radians[i].x=qFastCos(radians[i].angle);
        radians[i].y=qFastSin(radians[i].angle);
    }
}

void RightTriangleLocator::DrawStation(void)const{}
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
