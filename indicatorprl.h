#ifndef INDICATORPRL_H
#define INDICATORPRL_H

#include<QMainWindow>

namespace Ui
{
    class IndicatorPRL;
}

class IndicatorPRL : public QMainWindow
{
    Q_OBJECT

    public:
        explicit IndicatorPRL(QWidget *parent=0);
        ~IndicatorPRL();

    private:
        Ui::IndicatorPRL *ui;
};

#endif // INDICATORPRL_H
