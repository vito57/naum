"use client"

import { Card } from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import {
  ActivityIcon,
  ArrowLeftRightIcon,
  BellIcon,
  BookOpenIcon,
  Building2Icon,
  CircleHelpIcon,
  CreditCardIcon,
  FileBarChartIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  PaintbrushIcon,
  PieChartIcon,
  ShieldIcon,
  TargetIcon,
  TrendingUpIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react"
// import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder"

export function SidebarNav() {
  return (
    <div className="grid grid-cols-2 items-start gap-6">
      <Card className="overflow-hidden py-0">
        <SidebarProvider className="min-h-0">
          <Sidebar collapsible="none" className="w-full bg-transparent">
            <SidebarContent className="gap-0">
              <SidebarGroup className="pb-1">
                <SidebarGroupLabel>Обзор</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>
                        <LayoutDashboardIcon />
                        Панель
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <ArrowLeftRightIcon />
                        Операции
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <TrendingUpIcon />
                        Инвестиции
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Building2Icon />
                        Счета
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <PieChartIcon />
                        Расходы
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarSeparator className="w-auto!" />
              <SidebarGroup className="pt-1">
                <SidebarGroupLabel>Планирование</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <TargetIcon />
                        Цели
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <WalletIcon />
                        Бюджет
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <FileBarChartIcon />
                        Отчёты
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <FileTextIcon />
                        Документы
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </Card>
      <Card className="overflow-hidden py-0">
        <SidebarProvider className="min-h-0">
          <Sidebar collapsible="none" className="w-full bg-transparent">
            <SidebarContent className="gap-0">
              <SidebarGroup className="pb-1">
                <SidebarGroupLabel>Аккаунт</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <UserIcon />
                        Профиль
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>
                        <CreditCardIcon />
                        Оплата
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <BellIcon />
                        Уведомления
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <ShieldIcon />
                        Безопасность
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <PaintbrushIcon />
                        Оформление
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarSeparator className="w-auto!" />
              <SidebarGroup className="pt-1">
                <SidebarGroupLabel>Поддержка</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <CircleHelpIcon />
                        Центр помощи
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <MessageSquareIcon />
                        Связаться с нами
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <BookOpenIcon />
                        Документация
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <ActivityIcon />
                        Статус сервисов
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </Card>
    </div>
  )
}
