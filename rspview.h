#ifndef RSPVIEW_H
#define RSPVIEW_H

#include<QMainWindow>

namespace Ui
{
    class RSPView;
}

class RSPView : public QMainWindow
{
    Q_OBJECT

    public:
        explicit RSPView(QWidget *parent=0);
        ~RSPView();

    private slots:
        void on_ChangeMainScanAmpButton_pressed();
        void on_ChangeMainScanAmp_sliderPressed();
        void on_ChangeMainScanAmp_sliderReleased();
        void on_ChangeMainScanAmp_valueChanged(int value);
        void on_ChangeMainScanEquaButton_pressed();
        void on_ChangeMainScanEqua_sliderPressed();
        void on_ChangeMainScanEqua_sliderReleased();
        void on_ChangeMainScanEqua_valueChanged(int value);
        void on_ChangeMainOffsetVerticalButton_pressed();
        void on_ChangeMainOffsetVertical_sliderPressed();
        void on_ChangeMainOffsetVertical_sliderReleased();
        void on_ChangeMainOffsetVertical_valueChanged(int value);
        void on_ChangeMainOffsetHorizontalButton_pressed();
        void on_ChangeMainOffsetHorizontal_sliderPressed();
        void on_ChangeMainOffsetHorizontal_sliderReleased();
        void on_ChangeMainOffsetHorizontal_valueChanged(int value);
        void on_ChangeMainBrightnessRangeButton_pressed();
        void on_ChangeMainBrightnessRange_sliderPressed();
        void on_ChangeMainBrightnessRange_sliderReleased();
        void on_ChangeMainBrightnessRange_valueChanged(int value);
        void on_ChangeMainBrightnessAzimuthButton_pressed();
        void on_ChangeMainBrightnessAzimuth_sliderPressed();
        void on_ChangeMainBrightnessAzimuth_sliderReleased();
        void on_ChangeMainBrightnessAzimuth_valueChanged(int value);
        void on_ChangeMainNullSetVerticalButton_pressed();
        void on_ChangeMainNullSetVertical_sliderPressed();
        void on_ChangeMainNullSetVertical_sliderReleased();
        void on_ChangeMainNullSetVertical_valueChanged(int value);
        void on_ChangeMainNullSetHorizontalButton_pressed();
        void on_ChangeMainNullSetHorizontal_sliderPressed();
        void on_ChangeMainNullSetHorizontal_sliderReleased();
        void on_ChangeMainNullSetHorizontal_valueChanged(int value);
        void on_ChangeMainFocusButton_pressed();
        void on_ChangeMainFocus_sliderPressed();
        void on_ChangeMainFocus_sliderReleased();
        void on_ChangeMainFocus_valueChanged(int value);
        void on_ChangeMainFocusBrightnessButton_pressed();
        void on_ChangeMainFocusBrightness_sliderPressed();
        void on_ChangeMainFocusBrightness_sliderReleased();
        void on_ChangeMainFocusBrightness_valueChanged(int value);
        void on_ChangeMainTrashAKTButton_pressed();
        void on_ChangeMainTrashAKT_sliderPressed();
        void on_ChangeMainTrashAKT_sliderReleased();
        void on_ChangeMainTrashAKT_valueChanged(int value);
        void on_ChangeMainTrashPASSButton_pressed();
        void on_ChangeMainTrashPASS_sliderPressed();
        void on_ChangeMainTrashPASS_sliderReleased();
        void on_ChangeMainTrashPASS_valueChanged(int value);
        void on_SelectMainScale_pressed();
        void on_SelectMainScale_released();
        void on_ChangeTopScanAmpVerticalButton_pressed();
        void on_ChangeTopScanAmpVertical_sliderPressed();
        void on_ChangeTopScanAmpVertical_sliderReleased();
        void on_ChangeTopScanAmpVertical_valueChanged(int value);
        void on_ChangeTopScanAmpHorizontalButton_pressed();
        void on_ChangeTopScanAmpHorizontal_sliderPressed();
        void on_ChangeTopScanAmpHorizontal_sliderReleased();
        void on_ChangeTopScanAmpHorizontal_valueChanged(int value);
        void on_ChangeTopOffsetVerticalButton_pressed();
        void on_ChangeTopOffsetVertical_sliderPressed();
        void on_ChangeTopOffsetVertical_sliderReleased();
        void on_ChangeTopOffsetVertical_valueChanged(int value);
        void on_ChangeTopOffsetHorizontalButton_pressed();
        void on_ChangeTopOffsetHorizontal_sliderPressed();
        void on_ChangeTopOffsetHorizontal_sliderReleased();
        void on_ChangeTopOffsetHorizontal_valueChanged(int value);
        void on_ChangeTopDirectionTrackButton_pressed();
        void on_ChangeTopDirectionTrack_sliderPressed();
        void on_ChangeTopDirectionTrack_sliderReleased();
        void on_ChangeTopDirectionTrack_valueChanged(int value);
        void on_ChangeTopDirectionGlideButton_pressed();
        void on_ChangeTopDirectionGlide_sliderPressed();
        void on_ChangeTopDirectionGlide_sliderReleased();
        void on_ChangeTopDirectionGlide_valueChanged(int value);
        void on_ChangeTopFocusButton_pressed();
        void on_ChangeTopFocus_sliderPressed();
        void on_ChangeTopFocus_sliderReleased();
        void on_ChangeTopFocus_valueChanged(int value);
        void on_ChangeTopBrightnessButton_pressed();
        void on_ChangeTopBrightness_sliderPressed();
        void on_ChangeTopBrightness_sliderReleased();
        void on_ChangeTopBrightness_valueChanged(int value);
        void on_ChangeTopTrashSDCButton_pressed();
        void on_ChangeTopTrashSDC_sliderPressed();
        void on_ChangeTopTrashSDC_sliderReleased();
        void on_ChangeTopTrashSDC_valueChanged(int value);
        void on_ChangeTopTrashPASSButton_pressed();
        void on_ChangeTopTrashPASS_sliderPressed();
        void on_ChangeTopTrashPASS_sliderReleased();
        void on_ChangeTopTrashPASS_valueChanged(int value);
        void on_ChangeTopTrashAKTButton_pressed();
        void on_ChangeTopTrashAKT_sliderPressed();
        void on_ChangeTopTrashAKT_sliderReleased();
        void on_ChangeTopTrashAKT_valueChanged(int value);
        void on_SelectTopScale_pressed();
        void on_SelectTopScale_released();
        void on_SelectTopMode_pressed();
        void on_SelectTopMode_released();
        void on_ChangeRightScanAmpVerticalButton_pressed();
        void on_ChangeRightScanAmpVertical_sliderPressed();
        void on_ChangeRightScanAmpVertical_sliderReleased();
        void on_ChangeRightScanAmpVertical_valueChanged(int value);
        void on_ChangeRightScanAmpHorizontalButton_pressed();
        void on_ChangeRightScanAmpHorizontal_sliderPressed();
        void on_ChangeRightScanAmpHorizontal_sliderReleased();
        void on_ChangeRightScanAmpHorizontal_valueChanged(int value);
        void on_ChangeRightOffsetVerticalButton_pressed();
        void on_ChangeRightOffsetVertical_sliderPressed();
        void on_ChangeRightOffsetVertical_sliderReleased();
        void on_ChangeRightOffsetVertical_valueChanged(int value);
        void on_ChangeRightOffsetHorizontalButton_pressed();
        void on_ChangeRightOffsetHorizontal_sliderPressed();
        void on_ChangeRightOffsetHorizontal_sliderReleased();
        void on_ChangeRightOffsetHorizontal_valueChanged(int value);
        void on_ChangeRightDirectionTrackButton_pressed();
        void on_ChangeRightDirectionTrack_sliderPressed();
        void on_ChangeRightDirectionTrack_sliderReleased();
        void on_ChangeRightDirectionTrack_valueChanged(int value);
        void on_ChangeRightDirectionGlideButton_pressed();
        void on_ChangeRightDirectionGlide_sliderPressed();
        void on_ChangeRightDirectionGlide_sliderReleased();
        void on_ChangeRightDirectionGlide_valueChanged(int value);
        void on_ChangeRightBrightnessRangeButton_pressed();
        void on_ChangeRightBrightnessRange_sliderPressed();
        void on_ChangeRightBrightnessRange_sliderReleased();
        void on_ChangeRightBrightnessRange_valueChanged(int value);
        void on_ChangeRightBrightnessAzimuthButton_pressed();
        void on_ChangeRightBrightnessAzimuth_sliderPressed();
        void on_ChangeRightBrightnessAzimuth_sliderReleased();
        void on_ChangeRightBrightnessAzimuth_valueChanged(int value);
        void on_ChangeRightFocusButton_pressed();
        void on_ChangeRightFocus_sliderPressed();
        void on_ChangeRightFocus_sliderReleased();
        void on_ChangeRightFocus_valueChanged(int value);
        void on_ChangeRightFocusBrightnessButton_pressed();
        void on_ChangeRightFocusBrightness_sliderPressed();
        void on_ChangeRightFocusBrightness_sliderReleased();
        void on_ChangeRightFocusBrightness_valueChanged(int value);

    private:
        Ui::RSPView *ui;
};

#endif // RSPVIEW_H
