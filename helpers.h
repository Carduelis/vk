#ifndef HELPERS_H
#define HELPERS_H
#include<qmath.h>

#ifndef ROUND_DEGREE
#define ROUND_DEGREE 361u
#endif

#ifndef CIRCLE_CLEARANCE
#define CIRCLE_CLEARANCE 3u
#endif

#ifndef GetRadianValue
#define GetRadianValue(degree) (M_PI*degree)/180
#endif

#endif // HELPERS_H
