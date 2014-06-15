#include"toptrianglelocator.h"

TopTriangleLocator::TopTriangleLocator(QWidget *parent) : Daddy(parent)
{
}

TopTriangleLocator::~TopTriangleLocator()
{

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
