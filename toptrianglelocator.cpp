#include"toptrianglelocator.h"
#include<QDebug>

TopTriangleLocator::TopTriangleLocator(QWidget *parent) : Daddy(parent)
{

}

TopTriangleLocator::~TopTriangleLocator()
{

}

void TopTriangleLocator::GenerationRadians(bool)
{
    for(quint16 i=0u;i<ROUND_DEGREE;i++)
    {
        radians[i].angle=GetRadianValue(i);
        radians[i].x=qFastCos(radians[i].angle);
        radians[i].y=qFastSin(radians[i].angle);
    }
}

void TopTriangleLocator::DrawStation(void)const{}

void TopTriangleLocator::InitLocatorGrid(void)const{}

void TopTriangleLocator::ContinueSearch(void){}

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
