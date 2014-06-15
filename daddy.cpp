#include"daddy.h"
#include<QDebug>

Daddy::Daddy(QWidget *parent) : QGLWidget(QGLFormat(QGL::SampleBuffers),parent)
{
    //Переведём все используемые градусы в радианы
    for(quint16 i=0u;i<ROUND_DEGREE;i++)
    {
        radians[i].angle=GetRadianValue(i);
        radians[i].x=qFastCos(radians[i].angle);
        radians[i].y=qFastSin(radians[i].angle);
    }
    circle.clear();
    for(Points*i=radians,*end=radians+ROUND_DEGREE;i<end;circle.append(i),i+=3u); //Получаем координаты для отрисовки фона индикатора
}

Daddy::~Daddy()
{

}

void Daddy::initializeGL()
{
    qglClearColor(palette().background().color()); //Фон OpenGl-виджета
    glMatrixMode(GL_PROJECTION); //Устанавливаем матрицу
    glShadeModel(GL_SMOOTH);//GL_FLAT
    glBlendFunc(GL_SRC_ALPHA,GL_ONE_MINUS_SRC_ALPHA);
    glEnable(GL_POINT_SMOOTH);
    glEnable(GL_BLEND);
    glHint(GL_POINT_SMOOTH_HINT,GL_NICEST);
    //glEnable(GL_DEPTH_TEST);
}

void Daddy::resizeGL(int w,int h)
{
    glEnable(GL_MULTISAMPLE);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(.0f,.0f,.0f,1.0,1.0,-1.0f);
    if(w>h)
        glViewport(static_cast<GLint>(0u),static_cast<GLint>(0u),static_cast<GLint>(h),static_cast<GLint>(h));
    else
        glViewport(static_cast<GLint>(0u),static_cast<GLint>(0u),static_cast<GLint>(w),static_cast<GLint>(w));
    glMatrixMode(GL_MODELVIEW);
    width=w;
    height=h;
}

void Daddy::paintGL()
{
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT); // чистим буфер изображения и буфер глубины
    glLoadIdentity(); // загружаем матрицу
    glPushMatrix();
    //glLineWidth(2.0f*settings["system"]["focus"].toDouble());
    glLineWidth(2.0f);
    glEnable(GL_MULTISAMPLE);
    glEnable(GL_BLEND);
    LocatorArea();
    //glTranslatef(settings["offset"]["horizontal"].toDouble(),settings["offset"]["vertical"].toDouble(),.0f);
    //glTranslatef(-GRID_OFFSET+settings["offset"]["vertical"].toDouble()/100,.0f+settings["offset"]["horizontal"].toDouble()/100,.0f);
    DrawStation();
    //glColor4f(static_cast<GLfloat>(.925),static_cast<GLfloat>(.714),static_cast<GLfloat>(.262),settings["system"]["brightness"].toFloat());//перерисовка линии
    //glRotatef(90.0f,.0f,.0f,1.0);
    //glLineWidth(2.0f*settings["system"]["focus"].toDouble());
    //glBegin(GL_LINES);
       // glVertex2d(static_cast<GLdouble>(.0f),static_cast<GLdouble>(.0f));
        //glVertex2d((*ray_position)->x,(*ray_position)->y);
    //glEnd();
    glPopMatrix();
}

bool Daddy::IsActive(void)const
{
    return timer.isActive();
}

void Daddy::LocatorArea(void)const
{
    qglColor(Qt::black);
    glBegin(GL_TRIANGLE_FAN);
        for(QVector<Points*>::const_iterator it=circle.begin();it<circle.end();it++)
            glVertex2d((*it)->x,(*it)->y);
    glEnd();
}

/**
 * @brief MainLocator::DrawStation
 * Отрисуем прямоугольник
 */
void Daddy::DrawStation(void)const
{
    /*
    glRotatef(30.0f,.0f,.0f,1.0f);
    //glLineWidth(2.0f*settings["system"]["focus"].toDouble());
    glColor3f(static_cast<GLfloat>(.925),static_cast<GLfloat>(.714),static_cast<GLfloat>(.262));
    qreal
        distance=CalcScaleValue(1.0f),
        rx=5u*distance,
        ry=10u*distance;
    glTranslatef(rx,.0f,.0f);
    glBegin(GL_LINES);
        glVertex2d(-rx,-ry);
        glVertex2d(-rx,ry);

        glVertex2d(-rx,ry);
        glVertex2d(rx,ry);

        glVertex2d(-rx,-ry);
        glVertex2d(rx,-ry);

        glVertex2d(rx,-ry);
        glVertex2d(rx,ry);
    glEnd();
    glTranslatef(-rx,.0f,.0f);
    glRotatef(-30.0f,.0f,.0f,1.0);
    */
}

template<typename OptionType>void Daddy::SetSettings(const QString group,const QString name,const OptionType option)
{
    settings[group][name]=QVariant::fromValue(option);
    if(group!="common")
        updateGL();
}

template<typename OptionType>void Daddy::SetSettings(const QString name,const OptionType option)
{
    SetSettings("common",name,option);
}

QPixmap Daddy::RotateResourceImage(const QString resource_path,const qint16 degree)
{
    QPixmap original=QPixmap(resource_path),
            pixmap(original.size());
    pixmap.fill(Qt::transparent);

    QPainter p(&pixmap);
    p.translate(pixmap.size().width()/2,pixmap.size().height()/2);
    p.rotate(degree);
    p.translate(-pixmap.size().width()/2,-pixmap.size().height()/ 2);
    p.drawPixmap(0u,0u,original);
    p.end();
    return original=pixmap;
}
