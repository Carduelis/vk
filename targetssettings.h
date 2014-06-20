#ifndef TARGETSSETTINGS_H
#define TARGETSSETTINGS_H

#include <QMainWindow>

namespace Ui {
class TargetsSettings;
}

class TargetsSettings : public QMainWindow
{
    Q_OBJECT

public:
    explicit TargetsSettings(QWidget *parent = 0);
    ~TargetsSettings();

private:
    Ui::TargetsSettings *ui;
};

#endif // TARGETSSETTINGS_H
