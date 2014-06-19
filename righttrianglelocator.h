#ifndef RIGHTTRIANGLELOCATOR_H
#define RIGHTTRIANGLELOCATOR_H

#include"daddy.h"

class RightTriangleLocator : public Daddy
{
    Q_OBJECT
    public:
        explicit RightTriangleLocator(QWidget *parent=0);
        ~RightTriangleLocator();
        enum Azimuth{A_NO=0u,A_FIRST=10u,A_SECOND=30u};
        enum Range{R_NO=0u,R_FIRST=5u,R_SECOND=10u};
        enum Scale{S_SMALL=20u,S_MIDDLE=30u,S_LARGE=60u};
        enum WorkMode{WM_AKT=0u,WM_PASS,WM_SDC};

        Azimuth GetCurrentAzimuthMode(void)const;
        void SetCurrentAzimuthMode(const Azimuth);
        Range GetCurrentRangeMode(void)const;
        void SetCurrentRangeMode(const Range);
        Scale GetCurrentScaleMode(void)const;
        void SetCurrentScaleMode(const Scale);
        WorkMode GetCurrentWorkMode(void)const;
        void SetCurrentWorkMode(const WorkMode);

    signals:

    public slots:
    protected:
        Azimuth azimuth=Azimuth::A_NO;
        Range range=Range::R_NO;
        Scale scale=Scale::S_SMALL;
        WorkMode work_mode=WorkMode::WM_PASS;
        void GenerationRadians(bool);
        void DrawStation(void)const;
        void InitLocatorGrid(void)const;
        void ContinueSearch(void);
        void GenerationRange(void);
        void DrawRange(void)const;

    template<typename T>T CalcScaleValue(const T value,Scale scale)const;
    template<typename T>T CalcScaleValue(const T value)const;
};

#endif // RIGHTTRIANGLELOCATOR_H
