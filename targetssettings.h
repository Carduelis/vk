#ifndef TARGETSSETTINGS_H
#define TARGETSSETTINGS_H

#include<QMainWindow>

namespace Ui
{
    class TargetsSettings;
}

class TargetsSettings : public QMainWindow
{
    Q_OBJECT

    public:
        explicit TargetsSettings(QWidget *parent = 0);
        ~TargetsSettings();
        quint8 GetTargetsGount();

    private slots:
        void on_ApplyTargets_clicked();
        void on_TargetsGoHome_stateChanged(int arg);

        void on_SwitchTargetNext_clicked();

        void on_SwitchTargetPrev_clicked();

private:
        quint8 targets_count;
        Ui::TargetsSettings *ui;
};

#endif // TARGETSSETTINGS_H
