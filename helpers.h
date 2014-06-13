#ifndef HELPERS_H
#define HELPERS_H
#include<qmath.h>

#ifndef ROUND_DEGREE
#define ROUND_DEGREE 360
#endif

#ifndef GetRadianValue
#define GetRadianValue(degree) M_PI*degree/180
#endif

struct Points
{
    qreal x,y,angle;
};

#endif // HELPERS_H
