#ifndef MAINLOCATOR_H
#define MAINLOCATOR_H

#include<QGLWidget>
#include<QTime>
#include<QBasicTimer>
#include<QTimerEvent>
#include"helpers.h"

//Макрос стырен из Chromium, т.к. это пока лучшее, что можно придумать для подсчёта элементов массива
#ifndef ArraySize
template<typename T,size_t N>
char(&ArraySizeHelper(T(&array)[N]))[N];
#define ArraySize(array)(sizeof(ArraySizeHelper(array)))
#endif

class MainLocator : public QGLWidget
{
    Q_OBJECT
    public:
        explicit MainLocator(QWidget *parent=0);
        ~MainLocator();
        enum Azimuth{A_NO=0u,A_FIRST=10u,A_SECOND=30u};
        enum Range{R_NO=0u,R_FIRST=10u,R_SECOND=50u};
        enum Scale{S_SMALL=45u,S_MIDDLE=90u,S_LARGE=150u};
        enum WorkMode{WM_AKT=0u,WM_PASS,WM_SDC};

        template<typename OptionType>void SetSettings(const QString group,const QString name,const OptionType option);
        template<typename OptionType>void SetSettings(const QString name,const OptionType option);
        Azimuth GetCurrentAzimuthMode(void)const;
        void SetCurrentAzimuthMode(const Azimuth);
        Range GetCurrentRangeMode(void)const;
        void SetCurrentRangeMode(const Range);
        Scale GetCurrentScaleMode(void)const;
        void SetCurrentScaleMode(const Scale);
        WorkMode GetCurrentWorkMode(void)const;
        void SetCurrentWorkMode(const WorkMode);
        virtual bool IsActive(void)const;
        static QPixmap RotateResourceImage(const QString resource_path,const qint16 degree);

    signals:

    public slots:

    protected:
        void initializeGL();
        void resizeGL(int width, int height);
        void paintGL();
        //void timerEvent(QTimerEvent *event);
        //void mouseDoubleClickEvent(QMouseEvent  *event);
        void LocatorArea(void)const;
        void DrawStation(void)const;
        QMap<QString,QMap<QString,QVariant> >settings;
        QBasicTimer timer;
        Points radians[ROUND_DEGREE];
        QVector<Points*>circle;
        Azimuth azimuth=Azimuth::A_NO;
        Range range=Range::R_NO;
        Scale scale=Scale::S_SMALL;
        WorkMode work_mode=WorkMode::WM_PASS;
    private:
        int width,height;
};
#endif // MAINLOCATOR_H
