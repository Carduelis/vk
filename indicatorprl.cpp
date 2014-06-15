#include"indicatorprl.h"
#include"ui_indicatorprl.h"

IndicatorPRL::IndicatorPRL(QWidget *parent) : QMainWindow(parent),ui(new Ui::IndicatorPRL)
{
    ui->setupUi(this);
    ui->RenderTopTriangleLocator->SetCurrentRangeMode(TopTriangleLocator::Range::R_FIRST);
    ui->RenderTopTriangleLocator->SetCurrentScaleMode(TopTriangleLocator::Scale::S_SMALL);

    ui->RenderRightTriangleLocator->SetCurrentRangeMode(RightTriangleLocator::Range::R_FIRST);
    ui->RenderRightTriangleLocator->SetCurrentScaleMode(RightTriangleLocator::Scale::S_SMALL);

    ui->ChangeTopTrashIntensity->hide();
    ui->ChangeRightTrashIntensity->hide();

    ui->ChangeTopBrightness->hide();
    ui->ChangeRightBrightness->hide();

    ui->ChangeTopLightning->hide();
    ui->ChangeRightLightning->hide();

    ui->ChangeTopFocus->hide();
    ui->ChangeRightFocus->hide();

    ui->ChangeTopVARU->hide();
    ui->ChangeRightVARU->hide();
}

IndicatorPRL::~IndicatorPRL()
{
    delete ui;
}

void IndicatorPRL::on_SelectTopRangeMarks_pressed()
{
    ui->SelectTopRangeMarks->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_SelectTopRangeMarks_released()
{
    static bool way=false;
    qint8 degree=0u;
    TopTriangleLocator::Range r=ui->RenderTopTriangleLocator->GetCurrentRangeMode();
    if(r==TopTriangleLocator::Range::R_NO)
    {
        degree=0u;
        ui->RenderTopTriangleLocator->SetCurrentRangeMode(TopTriangleLocator::Range::R_FIRST);
    }
    else if(r==TopTriangleLocator::Range::R_FIRST)
    {
        if(way)
        {
            degree=-60;
            ui->RenderTopTriangleLocator->SetCurrentRangeMode(TopTriangleLocator::Range::R_NO);
        }
        else
        {
            degree=60u;
            ui->RenderTopTriangleLocator->SetCurrentRangeMode(TopTriangleLocator::Range::R_SECOND);
        }
        way=!way;
    }
    else if(r==TopTriangleLocator::Range::R_SECOND)
    {
        degree=0u;
        ui->RenderTopTriangleLocator->SetCurrentRangeMode(TopTriangleLocator::Range::R_FIRST);
    }
    ui->SelectTopRangeMarks->setIcon(QIcon(degree==0u ? QPixmap(":/buttons/knob") : Daddy::RotateResourceImage(":/buttons/knob",degree)));
    ui->SelectTopRangeMarks->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeTopTrashIntensityButton_pressed()
{
    ui->ChangeTopTrashIntensity->show();
    ui->ChangeTopTrashIntensity->setEnabled(true);
    ui->ChangeTopTrashIntensityButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopTrashIntensity_sliderPressed()
{
    ui->ChangeTopTrashIntensity->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopTrashIntensity_sliderReleased()
{
    ui->ChangeTopTrashIntensity->hide();
    ui->ChangeTopTrashIntensity->setDisabled(true);
    ui->ChangeTopTrashIntensity->setCursor(Qt::OpenHandCursor);
    ui->ChangeTopTrashIntensityButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeTopTrashIntensity_valueChanged(int value)
{
    if(value<0)
        return;
    ui->ChangeTopTrashIntensityButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeTopTrashIntensity->maximum())));
}

void IndicatorPRL::on_ChangeTopBrightnessButton_pressed()
{
    ui->ChangeTopBrightness->show();
    ui->ChangeTopBrightness->setEnabled(true);
    ui->ChangeTopBrightnessButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopBrightness_sliderPressed()
{
    ui->ChangeTopBrightness->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopBrightness_sliderReleased()
{
    ui->ChangeTopBrightness->hide();
    ui->ChangeTopBrightness->setDisabled(true);
    ui->ChangeTopBrightness->setCursor(Qt::OpenHandCursor);
    ui->ChangeTopBrightnessButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeTopBrightness_valueChanged(int value)
{
    if(value<0)
        return;
    ui->ChangeTopBrightnessButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeTopBrightness->maximum())));
}

void IndicatorPRL::on_ChangeTopLightningButton_pressed()
{
    ui->ChangeTopLightning->show();
    ui->ChangeTopLightning->setEnabled(true);
    ui->ChangeTopLightningButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopLightning_sliderPressed()
{
    ui->ChangeTopLightning->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopLightning_sliderReleased()
{
    ui->ChangeTopLightning->hide();
    ui->ChangeTopLightning->setDisabled(true);
    ui->ChangeTopLightning->setCursor(Qt::OpenHandCursor);
    ui->ChangeTopLightningButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeTopLightning_valueChanged(int value)
{
    if(value<0)
        return;
    ui->ChangeTopLightningButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeTopLightning->maximum())));
}

void IndicatorPRL::on_ChangeTopFocusButton_pressed()
{
    ui->ChangeTopFocus->show();
    ui->ChangeTopFocus->setEnabled(true);
    ui->ChangeTopFocusButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopFocus_sliderPressed()
{
    ui->ChangeTopFocus->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopFocus_sliderReleased()
{
    ui->ChangeTopFocus->hide();
    ui->ChangeTopFocus->setDisabled(true);
    ui->ChangeTopFocus->setCursor(Qt::OpenHandCursor);
    ui->ChangeTopFocusButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeTopFocus_valueChanged(int value)
{
    ui->ChangeTopFocusButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeTopFocus->maximum())));
}

void IndicatorPRL::on_ChangeTopVARUButton_pressed()
{
    ui->ChangeTopVARU->show();
    ui->ChangeTopVARU->setEnabled(true);
    ui->ChangeTopVARUButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopVARU_sliderPressed()
{
    ui->ChangeTopVARU->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeTopVARU_sliderReleased()
{
    ui->ChangeTopVARU->hide();
    ui->ChangeTopVARU->setDisabled(true);
    ui->ChangeTopVARU->setCursor(Qt::OpenHandCursor);
    ui->ChangeTopVARUButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeTopVARU_valueChanged(int value)
{
    ui->ChangeTopVARUButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeTopVARU->maximum())));
}

void IndicatorPRL::on_SelectTopScale_pressed()
{
    ui->SelectTopScale->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_SelectTopScale_released()
{
    static bool way=false;
    qint16 degree=0u;
    TopTriangleLocator::Scale s=ui->RenderTopTriangleLocator->GetCurrentScaleMode();
    if(s==TopTriangleLocator::Scale::S_SMALL)
    {
        degree=90u;
        ui->RenderTopTriangleLocator->SetCurrentScaleMode(TopTriangleLocator::Scale::S_MIDDLE);
    }
    else if(s==TopTriangleLocator::Scale::S_MIDDLE)
    {
        if(way)
        {
            degree=0u;
            ui->RenderTopTriangleLocator->SetCurrentScaleMode(TopTriangleLocator::Scale::S_SMALL);
        }
        else
        {
            degree=180u;
            ui->RenderTopTriangleLocator->SetCurrentScaleMode(TopTriangleLocator::Scale::S_LARGE);
        }
        way=!way;
    }
    else if(s==TopTriangleLocator::Scale::S_LARGE)
    {
        degree=90u;
        ui->RenderTopTriangleLocator->SetCurrentScaleMode(TopTriangleLocator::Scale::S_MIDDLE);
    }
    ui->SelectTopScale->setIcon(QIcon(degree==90u ? QPixmap(":/buttons/switch_base") : Daddy::RotateResourceImage(":/buttons/switch_up",degree)));
    ui->SelectTopScale->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeTopViewStateAll_clicked()
{

}

void IndicatorPRL::on_ChangeTopState_clicked()
{

}

void IndicatorPRL::on_SelectRightRangeMarks_pressed()
{
    ui->SelectRightRangeMarks->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_SelectRightRangeMarks_released()
{
    static bool way=false;
    qint8 degree=0u;
    RightTriangleLocator::Range r=ui->RenderRightTriangleLocator->GetCurrentRangeMode();
    if(r==RightTriangleLocator::Range::R_NO)
    {
        degree=0u;
        ui->RenderRightTriangleLocator->SetCurrentRangeMode(RightTriangleLocator::Range::R_FIRST);
    }
    else if(r==RightTriangleLocator::Range::R_FIRST)
    {
        if(way)
        {
            degree=-60;
            ui->RenderRightTriangleLocator->SetCurrentRangeMode(RightTriangleLocator::Range::R_NO);
        }
        else
        {
            degree=60u;
            ui->RenderRightTriangleLocator->SetCurrentRangeMode(RightTriangleLocator::Range::R_SECOND);
        }
        way=!way;
    }
    else if(r==RightTriangleLocator::Range::R_SECOND)
    {
        degree=0u;
        ui->RenderRightTriangleLocator->SetCurrentRangeMode(RightTriangleLocator::Range::R_FIRST);
    }
    ui->SelectRightRangeMarks->setIcon(QIcon(degree==0u ? QPixmap(":/buttons/knob") : Daddy::RotateResourceImage(":/buttons/knob",degree)));
    ui->SelectRightRangeMarks->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeRightTrashIntensityButton_pressed()
{
    ui->ChangeRightTrashIntensity->show();
    ui->ChangeRightTrashIntensity->setEnabled(true);
    ui->ChangeRightTrashIntensityButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightTrashIntensity_sliderPressed()
{
    ui->ChangeRightTrashIntensity->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightTrashIntensity_sliderReleased()
{
    ui->ChangeRightTrashIntensity->hide();
    ui->ChangeRightTrashIntensity->setDisabled(true);
    ui->ChangeRightTrashIntensity->setCursor(Qt::OpenHandCursor);
    ui->ChangeRightTrashIntensityButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeRightTrashIntensity_valueChanged(int value)
{
    if(value<0)
        return;
    QIcon ico=ui->ChangeRightTrashIntensityButton->icon();
    ui->ChangeRightTrashIntensityButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeRightTrashIntensity->maximum())));
}

void IndicatorPRL::on_ChangeRightBrightnessButton_pressed()
{
    ui->ChangeRightBrightness->show();
    ui->ChangeRightBrightness->setEnabled(true);
    ui->ChangeRightBrightnessButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightBrightness_sliderPressed()
{
    ui->ChangeRightBrightness->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightBrightness_sliderReleased()
{
    ui->ChangeRightBrightness->hide();
    ui->ChangeRightBrightness->setDisabled(true);
    ui->ChangeRightBrightness->setCursor(Qt::OpenHandCursor);
    ui->ChangeRightBrightnessButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeRightBrightness_valueChanged(int value)
{
    if(value<0)
        return;
    ui->ChangeRightBrightnessButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeRightBrightness->maximum())));
}

void IndicatorPRL::on_ChangeRightLightningButton_pressed()
{
    ui->ChangeRightLightning->show();
    ui->ChangeRightLightning->setEnabled(true);
    ui->ChangeRightLightningButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightLightning_sliderPressed()
{
    ui->ChangeRightLightning->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightLightning_sliderReleased()
{
    ui->ChangeRightLightning->hide();
    ui->ChangeRightLightning->setDisabled(true);
    ui->ChangeRightLightning->setCursor(Qt::OpenHandCursor);
    ui->ChangeRightLightningButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeRightLightning_valueChanged(int value)
{
    if(value<0)
        return;
    ui->ChangeRightLightningButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeRightLightning->maximum())));
}

void IndicatorPRL::on_ChangeRightFocusButton_pressed()
{
    ui->ChangeRightFocus->show();
    ui->ChangeRightFocus->setEnabled(true);
    ui->ChangeRightFocusButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightFocus_sliderPressed()
{
    ui->ChangeRightFocus->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightFocus_sliderReleased()
{
    ui->ChangeRightFocus->hide();
    ui->ChangeRightFocus->setDisabled(true);
    ui->ChangeRightFocus->setCursor(Qt::OpenHandCursor);
    ui->ChangeRightFocusButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeRightFocus_valueChanged(int value)
{
    ui->ChangeRightFocusButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeRightFocus->maximum())));
}

void IndicatorPRL::on_ChangeRightVARUButton_pressed()
{
    ui->ChangeRightVARU->show();
    ui->ChangeRightVARU->setEnabled(true);
    ui->ChangeRightVARUButton->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightVARU_sliderPressed()
{
    ui->ChangeRightVARU->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_ChangeRightVARU_sliderReleased()
{
    ui->ChangeRightVARU->hide();
    ui->ChangeRightVARU->setDisabled(true);
    ui->ChangeRightVARU->setCursor(Qt::OpenHandCursor);
    ui->ChangeRightVARUButton->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeRightVARU_valueChanged(int value)
{
    ui->ChangeRightVARUButton->setIcon(QIcon(value%100u==0 || value==0u ? QPixmap(":/buttons/reo_knob.png") : Daddy::RotateResourceImage(":/buttons/reo_knob.png",value*360/ui->ChangeRightVARU->maximum())));
}

void IndicatorPRL::on_SelectRightScale_pressed()
{
    ui->SelectRightScale->setCursor(Qt::ClosedHandCursor);
}

void IndicatorPRL::on_SelectRightScale_released()
{
    static bool way=false;
    qint16 degree=0u;
    RightTriangleLocator::Scale s=ui->RenderRightTriangleLocator->GetCurrentScaleMode();
    if(s==RightTriangleLocator::Scale::S_SMALL)
    {
        degree=90u;
        ui->RenderRightTriangleLocator->SetCurrentScaleMode(RightTriangleLocator::Scale::S_MIDDLE);
    }
    else if(s==RightTriangleLocator::Scale::S_MIDDLE)
    {
        if(way)
        {
            degree=0u;
            ui->RenderRightTriangleLocator->SetCurrentScaleMode(RightTriangleLocator::Scale::S_SMALL);
        }
        else
        {
            degree=180u;
            ui->RenderRightTriangleLocator->SetCurrentScaleMode(RightTriangleLocator::Scale::S_LARGE);
        }
        way=!way;
    }
    else if(s==RightTriangleLocator::Scale::S_LARGE)
    {
        degree=90u;
        ui->RenderRightTriangleLocator->SetCurrentScaleMode(RightTriangleLocator::Scale::S_MIDDLE);
    }
    ui->SelectRightScale->setIcon(QIcon(degree==90u ? QPixmap(":/buttons/switch_base") : Daddy::RotateResourceImage(":/buttons/switch_up",degree)));
    ui->SelectRightScale->setCursor(Qt::OpenHandCursor);
}

void IndicatorPRL::on_ChangeRightViewStateAll_clicked()
{

}

void IndicatorPRL::on_ChangeRightState_clicked()
{

}
