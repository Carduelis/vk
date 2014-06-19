#ifndef MAINLOCATOR_H
#define MAINLOCATOR_H

#include<QTime>
#include<QBasicTimer>
#include<QTimerEvent>
#include"daddy.h"

#ifndef LOCATOR_ROTATE_ANGLE
#define LOCATOR_ROTATE_ANGLE 30.0f
#endif

class MainLocator : public Daddy
{
    Q_OBJECT
    public:
        explicit MainLocator(QWidget *parent=0);
        ~MainLocator();
        enum Azimuth{A_NO=0u,A_FIRST=10u,A_SECOND=30u};
        enum Range{R_NO=0u,R_FIRST=10u,R_SECOND=50u};
        enum Scale{S_SMALL=45u,S_MIDDLE=90u,S_LARGE=150u};
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

        //void timerEvent(QTimerEvent *event);
        //void mouseDoubleClickEvent(QMouseEvent  *event);
        Azimuth azimuth=Azimuth::A_NO;
        Range range=Range::R_NO;
        Scale scale=Scale::S_SMALL;
        WorkMode work_mode=WorkMode::WM_PASS;
        QBasicTimer timer;
        void GenerationRadians(void);
        void GenerationRadians(bool);
        void DrawStation(void)const;
        void InitLocatorGrid(void)const;
        void ContinueSearch(void);
        void GenerationRange(void);
        void DrawRange(void)const;
        void GenerationAzimuth(void);
        void DrawAzimuth(void)const;
        void GenerationTrash(void);
        void DrawTrash(void)const;

        template<typename T>T CalcScaleValue(const T value,Scale scale)const;
        template<typename T>T CalcScaleValue(const T value)const;
    private:
};
#endif // MAINLOCATOR_H
