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
        virtual bool IsActive(void)const;
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
        QBasicTimer timer;
        Points radians[ROUND_DEGREE];
        QVector<Points*>circle;
        enum Scale{SMALL=0,MIDDLE=1,LARGE=2};

    private:
        int width,height;
};

#endif // MAINLOCATOR_H
