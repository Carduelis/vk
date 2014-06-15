#ifndef DADDY_H
#define DADDY_H

#include<QGLWidget>
#include<QBasicTimer>
#include"helpers.h"

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
        virtual bool IsActive(void)const;
        static QPixmap RotateResourceImage(const QString resource_path,const qint16 degree);

    signals:

    public slots:

    protected:
        void initializeGL();
        void resizeGL(int width,int height);
        void paintGL();
        void LocatorArea(void)const;
        void DrawStation(void)const;
        QMap<QString,QMap<QString,QVariant> >settings;
        QBasicTimer timer;
        Points radians[ROUND_DEGREE];
        QVector<Points*>circle;
        int width,height;
};

#endif // DADDY_H
