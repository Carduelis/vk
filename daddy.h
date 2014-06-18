#ifndef DADDY_H
#define DADDY_H

#include<QGLWidget>
#include<QBasicTimer>
#include<QTimerEvent>
#include<QVariant>
#include"helpers.h"
#include<QDebug>

#ifndef GL_MULTISAMPLE
#define GL_MULTISAMPLE  0x809D
#endif

//Макрос стырен из Chromium, т.к. это пока лучшее, что можно придумать для подсчёта элементов массива
#ifndef ArraySize
template<typename T,size_t N>
char(&ArraySizeHelper(T(&array)[N]))[N];
#define ArraySize(array)(sizeof(ArraySizeHelper(array)))
#endif

class Daddy : public QGLWidget
{
    Q_OBJECT
    public:
        explicit Daddy(QWidget *parent=0);
        ~Daddy();
        template<typename OptionType>void SetSettings(const QString group,const QString name,const OptionType option);
        template<typename OptionType>void SetSettings(const QString name,const OptionType option);
        bool IsActive(void)const;
        void ChangeFPS(qreal fps);
        static QPixmap RotateResourceImage(const QString resource_path,const qint16 degree);
        bool clockwise=true;

    signals:

    public slots:

    protected:
        void timerEvent(QTimerEvent *event);
        void initializeGL();
        void resizeGL(int width,int height);
        void paintGL();
        void LocatorArea(void)const;
        void GenerationRadians(void);
        void PostDraw(void)const;
        virtual void GenerationRadians(bool)=0;
        virtual void ContinueSearch(void)=0;
        virtual void DrawStation(void)const=0;
        virtual void InitLocatorGrid(void)const=0;
        void GenerationRay(void);
        void GenerationRay(quint16 angle);
        //template<typename T,typename S>T CalcScaleValue(const T value,const S scale)const;

        QMap<QString,QMap<QString,QVariant> >settings;
        Points radians[ROUND_DEGREE];
        QVector<Points>circle;
        QVector<Points*>ray;
        QVector<Points*>::const_iterator ray_position;
        QBasicTimer timer;
        int width=0u,height=0u;
        quint16 counter=0u,
                circle_counter=0u;
};

template<typename OptionType>void Daddy::SetSettings(const QString group, const QString name,const OptionType option)
{
    settings[group][name]=QVariant::fromValue(option);
    if(group!="common")
        updateGL();
}

template<typename OptionType>void Daddy::SetSettings(const QString name,const OptionType option)
{
    SetSettings("common",name,option);
}

#endif // DADDY_H
