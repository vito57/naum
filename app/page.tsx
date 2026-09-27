"use client"
import BorderBeam from "border-beam"
import { AccountAccess } from "./cards/account-access"
import { AlbumCard } from "./cards/album-card"
import { CardOverview } from "./cards/card-overview"
import { CatalogToolbar } from "./cards/catalog-toolbar"
import { ClaimableBalance } from "./cards/claimable-balance"
import { ContributionHistory } from "./cards/contribution-history"
import { CoverArt } from "./cards/cover-art"
import { DividendIncome } from "./cards/dividend-income"
import { EmptyConnectBank } from "./cards/empty-connect-bank"
import { EmptyDistributeTrack } from "./cards/empty-distribute-track"
import { EmptyExploreCatalog } from "./cards/empty-explore-catalog"
import { Faq } from "./cards/faq"
import { FrontDoor } from "./cards/front-door"
import { IndexInvesting } from "./cards/index-investing"
import { KitchenIsland } from "./cards/kitchen-island"
import { LoadingCard } from "./cards/loading-card"
import { NewMilestone } from "./cards/new-milestone"
import { NotificationSettings } from "./cards/notification-settings"
import { Payments } from "./cards/payments"
import { PayoutThreshold } from "./cards/payout-threshold"
import { PowerUsage } from "./cards/power-usage"
import { Preferences } from "./cards/preferences"
import { QrConnect } from "./cards/qr-connect"
import { ReceivingMethod } from "./cards/receiving-method"
import { RecentTransactions } from "./cards/recent-transactions"
import { ReleaseCatalog } from "./cards/release-catalog"
import { RollerShades } from "./cards/roller-shades"
import { SavingsProgress } from "./cards/savings-progress"
import { SavingsTargets } from "./cards/savings-targets"
import { SidebarNav } from "./cards/sidebar-nav"
import { SocialLinks } from "./cards/social-links"
import { StockPerformance } from "./cards/stock-performance"
import { SyncingState } from "./cards/syncing-state"
import { TransferFunds } from "./cards/transfer-funds"
import { UpcomingPayments } from "./cards/upcoming-payments"
export default function Page() {
  return (
    <div className="bg-background">
      <div className="container mx-auto pt-8 pb-8">
        <div className=" columns-1 lg:columns-3 gap-6">
          <div className="mb-6 break-inside-avoid-column">
            <ContributionHistory />
          </div>
          <div className="mb-6 break-inside-avoid-column">

            <AccountAccess />

          </div>
          <div className="mb-6 break-inside-avoid-column">
            <AlbumCard />
          </div>
          <div className="mb-6 break-inside-avoid-column">
            <CardOverview />
          </div>
          <div className="mb-6 break-inside-avoid-column">
            <ClaimableBalance />
          </div>

          <div className="mb-6 break-inside-avoid-column">
            <CoverArt />
          </div>
          <div className="mb-6 break-inside-avoid-column">
            <DividendIncome />
          </div>
          <div className="mb-6">
            <EmptyConnectBank />
          </div>
          <div className="mb-6">
            <EmptyDistributeTrack />
          </div>
          <div className="mb-6">
            <EmptyExploreCatalog />
          </div>
          <div className="mb-6">
            <Faq />
          </div>
          <div className="mb-6">
            <FrontDoor />
          </div>
          <div className="mb-6">
            <IndexInvesting />
          </div>
          <div className="mb-6">
            <KitchenIsland />
          </div>

          <div className="mb-6">
            <NewMilestone />
          </div>
          <div className="mb-6">
            <NotificationSettings />
          </div>
          <div className="mb-6">
            <Payments />
          </div>
          <div className="mb-6">
            <PayoutThreshold />
          </div>
          <div className="mb-6">
            <PowerUsage />
          </div>
          <div className="mb-6">
            <Preferences />
          </div>
          <div className="mb-6">
            <QrConnect />
          </div>
          <div className="mb-6">
            <ReceivingMethod />
          </div>
          <div className="mb-6">
            <RecentTransactions />
          </div>
          <div className="mb-6">
            <ReleaseCatalog />
          </div>
          <div className="mb-6">
            <RollerShades />
          </div>
          <div className="mb-6">
            <SavingsProgress />
          </div>
          <div className="mb-6">
            <SavingsTargets />
          </div>
          <div className="mb-6">
            <SidebarNav />
          </div>
          <div className="mb-6">
            <SocialLinks />
          </div>
          <div className="mb-6">
            <StockPerformance />
          </div>
          <div className="mb-6">
            <SyncingState />
          </div>
          <div className="mb-6">
            <LoadingCard />
          </div>
          <div className="mb-6">
            <TransferFunds />
          </div>
          <div className="mb-6">
            <UpcomingPayments />
          </div>
        </div>
      </div>
    </div>
  )
}
