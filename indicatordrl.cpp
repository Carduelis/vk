#include"indicatordrl.h"
#include"ui_indicatordrl.h"
#include<QDebug>

IndicatorDRL::IndicatorDRL(QWidget *parent) : QMainWindow(parent),ui(new Ui::IndicatorDRL)
{
    ui->setupUi(this);
    ui->RenderMainLocator->SetCurrentAzimuthMode(MainLocator::Azimuth::A_FIRST);
    ui->RenderMainLocator->SetCurrentRangeMode(MainLocator::Range::R_FIRST);
    ui->RenderMainLocator->SetCurrentScaleMode(MainLocator::Scale::S_SMALL);
    ui->RenderMainLocator->SetCurrentWorkMode(MainLocator::WorkMode::WM_PASS);

    ui->ChangeIndicatorBrightness->hide();
    ui->ChangeIndicatorLightning->hide();
    ui->ChangeIndicatorFocus->hide();
    ui->ChangeIndicatorVARU->hide();

    ui->ChangeTrashIntensity->hide();

    ui->ChangeIndicatorBrightness->valueChanged(ui->ChangeIndicatorBrightness->value());
    ui->ChangeIndicatorLightning->valueChanged(ui->ChangeIndicatorLightning->value());
    ui->ChangeIndicatorFocus->valueChanged(ui->ChangeIndicatorFocus->value());
    ui->ChangeIndicatorVARU->valueChanged(ui->ChangeIndicatorVARU->value());
    ui->ChangeTrashIntensity->valueChanged(ui->ChangeTrashIntensity->value());
    ui->InputScatterTrashFrom->valueChanged(ui->InputScatterTrashFrom->value());
    ui->InputScatterTrashTo->valueChanged(ui->InputScatterTrashTo->value());
    ui->CheckShowLocalItems->stateChanged(ui->CheckShowLocalItems->checkState());
    ui->CheckShowMeteo->stateChanged(ui->CheckShowMeteo->checkState());

    QStringList intensity;
    intensity<<"Слабая"<<"Средняя"<<"Сильная";
    ui->SelectActiveNoiseIntensity->addItems(intensity);
    ui->SelectActiveNoiseIntensity->setCurrentIndex(1);
    ui->InputActiveNoiseAzimuth->valueChanged(ui->InputActiveNoiseAzimuth->value());
    ui->CheckActiveNoiseShow->stateChanged(ui->CheckActiveNoiseShow->checkState());

    ui->InputActiveAnswerAzimuth->valueChanged(ui->InputActiveAnswerAzimuth->value());
    ui->InputActiveAnswerDistance->valueChanged(ui->InputActiveAnswerDistance->value());
    ui->CheckActiveAnswerShow->stateChanged(ui->CheckActiveAnswerShow->checkState());
    ui->CheckActiveInSyncShow->stateChanged(ui->CheckActiveInSyncShow->checkState());

    ui->ChangeLocatorState->clicked();
}

IndicatorDRL::~IndicatorDRL()
{
    delete ui;
}

void IndicatorDRL::on_SelectAzimuthMarks_pressed()
{
    ui->SelectAzimuthMarks->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_SelectAzimuthMarks_released()
{
    static bool way=false;
    qint8 degree=0u;
    MainLocator::Azimuth a=ui->RenderMainLocator->GetCurrentAzimuthMode();
    if(a==MainLocator::Azimuth::A_NO)
    {
        degree=0u;
        ui->RenderMainLocator->SetCurrentAzimuthMode(MainLocator::Azimuth::A_FIRST);
    }
    else if(a==MainLocator::Azimuth::A_FIRST)
    {
        if(way)
        {
            degree=-60;
            ui->RenderMainLocator->SetCurrentAzimuthMode(MainLocator::Azimuth::A_NO);
        }
        else
        {
            degree=60u;
            ui->RenderMainLocator->SetCurrentAzimuthMode(MainLocator::Azimuth::A_SECOND);
        }
        way=!way;
    }
    else if(a==MainLocator::Azimuth::A_SECOND)
    {
        degree=0u;
        ui->RenderMainLocator->SetCurrentAzimuthMode(MainLocator::Azimuth::A_FIRST);
    }
    ui->SelectAzimuthMarks->setIcon(QIcon(degree==0u ? QPixmap(":/buttons/knob") : Daddy::RotateResourceImage(":/buttons/knob",degree)));
    ui->SelectAzimuthMarks->setCursor(Qt::OpenHandCursor);
}

void IndicatorDRL::on_SelectRangeMarks_pressed()
{
    ui->SelectRangeMarks->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_SelectRangeMarks_released()
{
    static bool way=false;
    qint8 degree=0u;
    MainLocator::Range r=ui->RenderMainLocator->GetCurrentRangeMode();
    if(r==MainLocator::Range::R_NO)
    {
        degree=0u;
        ui->RenderMainLocator->SetCurrentRangeMode(MainLocator::Range::R_FIRST);
    }
    else if(r==MainLocator::Range::R_FIRST)
    {
        if(way)
        {
            degree=-60;
            ui->RenderMainLocator->SetCurrentRangeMode(MainLocator::Range::R_NO);
        }
        else
        {
            degree=60u;
            ui->RenderMainLocator->SetCurrentRangeMode(MainLocator::Range::R_SECOND);
        }
        way=!way;
    }
    else if(r==MainLocator::Range::R_SECOND)
    {
        degree=0u;
        ui->RenderMainLocator->SetCurrentRangeMode(MainLocator::Range::R_FIRST);
    }
    ui->SelectRangeMarks->setIcon(QIcon(degree==0u ? QPixmap(":/buttons/knob") : Daddy::RotateResourceImage(":/buttons/knob",degree)));
    ui->SelectRangeMarks->setCursor(Qt::OpenHandCursor);
}

void IndicatorDRL::on_SelectScale_pressed()
{
    ui->SelectScale->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_SelectScale_released()
{
    static bool way=false;
    qint16 degree=0u;
    MainLocator::Scale s=ui->RenderMainLocator->GetCurrentScaleMode();
    if(s==MainLocator::Scale::S_SMALL)
    {
        degree=90u;
        ui->RenderMainLocator->SetCurrentScaleMode(MainLocator::Scale::S_MIDDLE);
    }
    else if(s==MainLocator::Scale::S_MIDDLE)
    {
        if(way)
        {
            degree=0u;
            ui->RenderMainLocator->SetCurrentScaleMode(MainLocator::Scale::S_SMALL);
        }
        else
        {
            degree=180u;
            ui->RenderMainLocator->SetCurrentScaleMode(MainLocator::Scale::S_LARGE);
        }
        way=!way;
    }
    else if(s==MainLocator::Scale::S_LARGE)
    {
        degree=90u;
        ui->RenderMainLocator->SetCurrentScaleMode(MainLocator::Scale::S_MIDDLE);
    }
    ui->SelectScale->setIcon(QIcon(degree==90u ? QPixmap(":/buttons/switch_base") : Daddy::RotateResourceImage(":/buttons/switch_up",degree)));
    ui->SelectScale->setCursor(Qt::OpenHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorBrightnessButton_pressed()
{
    ui->ChangeIndicatorBrightness->show();
    ui->ChangeIndicatorBrightness->setEnabled(true);
    ui->ChangeIndicatorBrightnessButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorBrightness_sliderPressed()
{
    ui->ChangeIndicatorBrightness->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorBrightness_sliderReleased()
{
    ui->ChangeIndicatorBrightness->hide();
    ui->ChangeIndicatorBrightness->setDisabled(true);
    ui->ChangeIndicatorBrightness->setCursor(Qt::OpenHandCursor);
    ui->ChangeIndicatorBrightnessButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorBrightness_valueChanged(int value)
{
    if(value<0)
        return;
    ui->ChangeIndicatorBrightnessButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeIndicatorBrightness->maximum())));
}

void IndicatorDRL::on_ChangeIndicatorLightningButton_pressed()
{
    ui->ChangeIndicatorLightning->show();
    ui->ChangeIndicatorLightning->setEnabled(true);
    ui->ChangeIndicatorLightningButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorLightning_sliderPressed()
{
    ui->ChangeIndicatorLightning->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorLightning_sliderReleased()
{
    ui->ChangeIndicatorLightning->hide();
    ui->ChangeIndicatorLightning->setDisabled(true);
    ui->ChangeIndicatorLightning->setCursor(Qt::OpenHandCursor);
    ui->ChangeIndicatorLightningButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorLightning_valueChanged(int value)
{
    if(value<0)
        return;
    ui->ChangeIndicatorLightningButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeIndicatorLightning->maximum())));
}

void IndicatorDRL::on_ChangeIndicatorFocusButton_pressed()
{
    ui->ChangeIndicatorFocus->show();
    ui->ChangeIndicatorFocus->setEnabled(true);
    ui->ChangeIndicatorFocusButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorFocus_sliderPressed()
{
    ui->ChangeIndicatorFocus->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorFocus_sliderReleased()
{
    ui->ChangeIndicatorFocus->hide();
    ui->ChangeIndicatorFocus->setDisabled(true);
    ui->ChangeIndicatorFocus->setCursor(Qt::OpenHandCursor);
    ui->ChangeIndicatorFocusButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorFocus_valueChanged(int value)
{
    ui->ChangeIndicatorFocusButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeIndicatorFocus->maximum())));
}

void IndicatorDRL::on_ChangeIndicatorVARUButton_pressed()
{
    ui->ChangeIndicatorVARU->show();
    ui->ChangeIndicatorVARU->setEnabled(true);
    ui->ChangeIndicatorVARUButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorVARU_sliderPressed()
{
    ui->ChangeIndicatorVARU->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorVARU_sliderReleased()
{
    ui->ChangeIndicatorVARU->hide();
    ui->ChangeIndicatorVARU->setDisabled(true);
    ui->ChangeIndicatorVARU->setCursor(Qt::OpenHandCursor);
    ui->ChangeIndicatorVARUButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorDRL::on_ChangeIndicatorVARU_valueChanged(int value)
{
    ui->ChangeIndicatorVARUButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeIndicatorVARU->maximum())));
}

void IndicatorDRL::on_SelectWorkVariant_pressed()
{
    ui->SelectWorkVariant->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_SelectWorkVariant_released()
{
    static bool way=false;
    qint8 degree=0u;
    MainLocator::WorkMode wm=ui->RenderMainLocator->GetCurrentWorkMode();
    if(wm==MainLocator::WorkMode::WM_AKT)
    {
        degree=0u;
        ui->RenderMainLocator->SetCurrentWorkMode(MainLocator::WorkMode::WM_PASS);
    }
    else if(wm==MainLocator::WorkMode::WM_PASS)
    {
        if(way)
        {
            degree=-60;
            ui->RenderMainLocator->SetCurrentWorkMode(MainLocator::WorkMode::WM_AKT);
        }
        else
        {
            degree=60u;
            ui->RenderMainLocator->SetCurrentWorkMode(MainLocator::WorkMode::WM_SDC);
        }
        way=!way;
    }
    else if(wm==MainLocator::WorkMode::WM_SDC)
    {
        degree=0u;
        ui->RenderMainLocator->SetCurrentWorkMode(MainLocator::WorkMode::WM_PASS);
    }
    ui->SelectWorkVariant->setIcon(QIcon(degree==0u ? QPixmap(":/buttons/knob") : Daddy::RotateResourceImage(":/buttons/knob",degree)));
    ui->SelectWorkVariant->setCursor(Qt::OpenHandCursor);
}

void IndicatorDRL::on_ChangeTrashIntensityButton_pressed()
{
    ui->ChangeTrashIntensity->show();
    ui->ChangeTrashIntensity->setEnabled(true);
    ui->ChangeTrashIntensityButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeTrashIntensity_sliderPressed()
{
    ui->ChangeTrashIntensity->setCursor(Qt::ClosedHandCursor);
}

void IndicatorDRL::on_ChangeTrashIntensity_sliderReleased()
{
    ui->ChangeTrashIntensity->hide();
    ui->ChangeTrashIntensity->setDisabled(true);
    ui->ChangeTrashIntensity->setCursor(Qt::OpenHandCursor);
    ui->ChangeTrashIntensityButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorDRL::on_ChangeTrashIntensity_valueChanged(int value)
{
    if(value<0)
        return;
    ui->ChangeTrashIntensityButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeTrashIntensity->maximum())));
}

void IndicatorDRL::on_InputScatterTrashFrom_valueChanged(double arg1)
{

}

void IndicatorDRL::on_InputScatterTrashTo_valueChanged(double arg1)
{

}

void IndicatorDRL::on_CheckShowLocalItems_stateChanged(int arg1)
{

}

void IndicatorDRL::on_CheckShowMeteo_stateChanged(int arg1)
{

}

void IndicatorDRL::on_RegenerateTrash_clicked()
{

}

void IndicatorDRL::on_InputActiveNoiseAzimuth_valueChanged(int arg1)
{

}

void IndicatorDRL::on_SelectActiveNoiseIntensity_currentIndexChanged(int index)
{

}

void IndicatorDRL::on_CheckActiveNoiseShow_stateChanged(int arg1)
{

}

void IndicatorDRL::on_InputActiveAnswerAzimuth_valueChanged(int arg1)
{

}

void IndicatorDRL::on_InputActiveAnswerDistance_valueChanged(double arg1)
{

}

void IndicatorDRL::on_CheckActiveAnswerShow_stateChanged(int arg1)
{

}

void IndicatorDRL::on_CheckActiveInSyncShow_stateChanged(int arg1)
{

}

void IndicatorDRL::on_ChangeViewStateAll_clicked()
{

}

void IndicatorDRL::on_ChangeLocatorState_clicked()
{
    if(ui->RenderMainLocator->IsActive())
    {
        ui->RenderMainLocator->ChangeFPS(0u);
        ui->ChangeLocatorState->setText("Продолжить");
    }
    else
    {
        ui->RenderMainLocator->ChangeFPS(static_cast<qreal>(1000)/24);
        ui->ChangeLocatorState->setText("Стоп");
    }
}

void IndicatorDRL::on_SetTargetsSettings_clicked()
{

}
