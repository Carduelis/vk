#ifndef DADDY_H
#define DADDY_H

#include<QGLWidget>
#include<QBasicTimer>
#include<QTimerEvent>
#include<QVariant>
#include<QMouseEvent>
#include<qmath.h>
#include"helpers.h"
#include<QDebug>


#ifndef ROUND_DEGREE
#define ROUND_DEGREE 361u
#endif

#ifndef CIRCLE_CLEARANCE
#define CIRCLE_CLEARANCE 3u
#endif

#ifndef GetRadianValue
#define GetRadianValue(degree) (M_PI*degree)/180
#endif

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
        bool IsAllVisible(void)const;
        void SetAllVisible(bool);
        void ChangeFPS(qreal fps);
        static QPixmap RotateResourceImage(const QString resource_path,const qint16 degree);
        bool clockwise=true;
        QColor Color;

    signals:

    public slots:

    protected:
        struct Points
        {
            qreal x,y,angle;
        }*radians;

        struct PointsR : public Points
        {
            qreal r;
        };
        struct RoundLine
        {
            qreal width;
            Points *Coordinates=nullptr;
        };
        struct CenterStraightLine
        {
            qreal width;
            Points Coordinates;
        };
        struct Storage
        {
            QHash<quint16,QVector<PointsR> >trash,local_items,meteo;
            QHash<quint16,QVector<RoundLine> >range;
            QVector<CenterStraightLine>azimuth;
            QVector<RoundLine>active_noise_trash;
        }S;

        struct Pointer
        {
            QVector<RoundLine>*range=nullptr;
            QVector<CenterStraightLine>*azimuth=nullptr;
        }Cache,Current;

        void mouseDoubleClickEvent(QMouseEvent  *event);
        void timerEvent(QTimerEvent *event);
        void initializeGL();
        void resizeGL(int width,int height);
        void paintGL();
        qreal CalcAlpha(qreal angle)const;
        void LocatorArea(void)const;
        void PostDraw(void)const;
        void GenerationRadians(void);
        virtual void GenerationRange(void)=0;
        virtual void DrawRange(void)const=0;
        virtual void GenerationAzimuth(void)=0;
        virtual void DrawAzimuth(void)const=0;
        virtual void ContinueSearch(void)=0;
        virtual void DrawStation(void)const=0;
        virtual void InitLocatorGrid(void)const=0;
        void GenerationRay(void);
        void GenerationRay(quint16 angle);
        void DrawRay(void)const;

        virtual void GenerationTrash(void)=0;
        virtual void DrawTrash(void)const=0;
        virtual void GenerationLocalItems(void)=0;
        virtual void DrawLocalItems(void)const=0;
        virtual void GenerationMeteo(void)=0;
        virtual void DrawMeteo(void)const=0;
        virtual void GenerationActiveNoiseTrash(void)=0;
        virtual void DrawActiveNoiseTrash(void)const=0;

        qint8 GetRandomSign(void)const;
        qreal GetRandomCoord(quint8 accuracy,const bool rsign=false)const;
        bool show=false;
        QMap<QString,QMap<QString,QVariant> >settings;
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
    if(group=="trash")
        GenerationTrash();
    if(group=="local_items" && name=="show")
        GenerationLocalItems();
    if(group=="meteo");
    if(group=="active_noise_trash")
        GenerationActiveNoiseTrash();

    if(group!="common")
        updateGL();
}

template<typename OptionType>void Daddy::SetSettings(const QString name,const OptionType option)
{
    SetSettings("common",name,option);
}

#endif // DADDY_H
