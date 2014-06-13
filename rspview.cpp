#include "rspview.h"
#include "ui_rspview.h"

RSPView::RSPView(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::RSPView)
{
    ui->setupUi(this);
}

RSPView::~RSPView()
{
    delete ui;
}
