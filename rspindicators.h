#ifndef RSPINDICATORS_H
#define RSPINDICATORS_H

#include <QMainWindow>

namespace Ui {
class RSPIndicators;
}

class RSPIndicators : public QMainWindow
{
    Q_OBJECT

public:
    explicit RSPIndicators(QWidget *parent = 0);
    ~RSPIndicators();

private:
    Ui::RSPIndicators *ui;
};

#endif // RSPINDICATORS_H
