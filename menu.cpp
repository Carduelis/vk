#include"menu.h"
#include"ui_menu.h"

Menu::Menu(QWidget *parent) : QMainWindow(parent),ui(new Ui::Menu)
{
    ui->setupUi(this);
}

Menu::~Menu()
{
    delete ui;
}

void Menu::on_ButtonIndicatorDRL_clicked()
{
    DRL=new IndicatorDRL;
    DRL->show();
}
