#include"mainlocator.h"
#include<QDebug>

MainLocator::MainLocator(QWidget *parent) : Daddy(parent)
{
}

MainLocator::~MainLocator()
{
    if(IsActive())
        killTimer(timer.timerId());
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
