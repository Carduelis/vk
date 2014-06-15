#include"righttrianglelocator.h"

RightTriangleLocator::RightTriangleLocator(QWidget *parent) : Daddy(parent)
{
}

RightTriangleLocator::~RightTriangleLocator()
{

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
