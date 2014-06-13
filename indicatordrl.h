#ifndef INDICATORDRL_H
#define INDICATORDRL_H

#include<QMainWindow>

namespace Ui
{
    class IndicatorDRL;
}

class IndicatorDRL : public QMainWindow
{
    Q_OBJECT

    public:
        explicit IndicatorDRL(QWidget *parent=0);
        ~IndicatorDRL();

    private:
        Ui::IndicatorDRL *ui;
};

#endif // INDICATORDRL_H
