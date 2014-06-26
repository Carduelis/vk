#include"targetssettings.h"
#include"ui_targetssettings.h"
#include<QDebug>

TargetsSettings::TargetsSettings(QWidget *parent) : QMainWindow(parent),ui(new Ui::TargetsSettings)
{
    ui->setupUi(this);
    targets_count=ui->Targets->count();
    QCheckBox *checkbox;
    for(quint8 widget=0u;widget<targets_count;widget++)
    {
        ui->Targets->setCurrentIndex(widget);
        checkbox=ui->Targets->currentWidget()->findChild<QCheckBox*>(QString("%1%2").arg("TargetGoHome").arg(widget+1)),
        connect(
            checkbox,
            SIGNAL(stateChanged(int)),
            this,
            SLOT(on_TargetsGoHome_stateChanged(int))
        );
        checkbox->stateChanged(checkbox->checkState());
    }
    ui->Targets->setCurrentIndex(0);
}

TargetsSettings::~TargetsSettings()
{
    delete ui;
}

quint8 TargetsSettings::GetTargetsGount()
{
    return targets_count;
}

void TargetsSettings::on_ApplyTargets_clicked()
{

}

void TargetsSettings::on_TargetsGoHome_stateChanged(int arg)
{
    QRadioButton *radio1,*radio2;
    radio1=QObject::sender()->parent()->findChild<QRadioButton*>(QString("%1%2").arg("TargetGoHome150").arg(ui->Targets->currentIndex()+1));
    radio2=QObject::sender()->parent()->findChild<QRadioButton*>(QString("%1%2").arg("TargetGoHome330").arg(ui->Targets->currentIndex()+1));
    if((radio1->isChecked() && radio2->isChecked()) || (!radio1->isChecked() && !radio2->isChecked()))
    {
        radio1->setChecked(true);
        radio2->setChecked(false);
    }
    radio1->setEnabled(arg==2);
    radio2->setEnabled(arg==2);
}

void TargetsSettings::on_SwitchTargetNext_clicked()
{
    quint8 pos=static_cast<quint8>(ui->Targets->currentIndex());
    if(pos<GetTargetsGount()-1u)
        pos++;
    else
        pos=0u;
    ui->Targets->setCurrentIndex(pos);
}

void TargetsSettings::on_SwitchTargetPrev_clicked()
{
    quint8 pos=static_cast<quint8>(ui->Targets->currentIndex());
    if(pos>0u)
        pos--;
    else
        pos=GetTargetsGount()-1u;
    ui->Targets->setCurrentIndex(pos);
}
