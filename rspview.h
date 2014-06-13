#ifndef RSPVIEW_H
#define RSPVIEW_H

#include <QMainWindow>

namespace Ui {
class RSPView;
}

class RSPView : public QMainWindow
{
    Q_OBJECT

public:
    explicit RSPView(QWidget *parent = 0);
    ~RSPView();

private:
    Ui::RSPView *ui;
};

#endif // RSPVIEW_H
