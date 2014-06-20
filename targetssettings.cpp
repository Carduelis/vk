#include "targetssettings.h"
#include "ui_targetssettings.h"

TargetsSettings::TargetsSettings(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::TargetsSettings)
{
    ui->setupUi(this);
}

TargetsSettings::~TargetsSettings()
{
    delete ui;
}
