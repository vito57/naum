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
    <div className="bg-slate-100">
      <div className="container mx-auto pt-8">
        <div className="breack-inside columns-4 gap-10">
          <div className="mb-4 break-inside-avoid-column">
            <AccountAccess />
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <AlbumCard />
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <CardOverview />
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <ClaimableBalance />
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <ContributionHistory />
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <CoverArt />
          </div>
          <div className="mb-4 break-inside-avoid-column">
            <DividendIncome />
          </div>
          <div className="mb-4">
            <EmptyConnectBank />
          </div>
          <div className="mb-4">
            <EmptyDistributeTrack />
          </div>
          <div className="mb-4">
            <EmptyExploreCatalog />
          </div>
          <div className="mb-4">
            <Faq />
          </div>
          <div className="mb-4">
            <FrontDoor />
          </div>
          <div className="mb-4">
            <IndexInvesting />
          </div>
          <div className="mb-4">
            <KitchenIsland />
          </div>
          <div className="mb-4">
            <LoadingCard />
          </div>
          <div className="mb-4">
            <NewMilestone />
          </div>
          <div className="mb-4">
            <NotificationSettings />
          </div>
          <div className="mb-4">
            <Payments />
          </div>
          <div className="mb-4">
            <PayoutThreshold />
          </div>
          <div className="mb-4">
            <PowerUsage />
          </div>
          <div className="mb-4">
            <Preferences />
          </div>
          <div className="mb-4">
            <QrConnect />
          </div>
          <div className="mb-4">
            <ReceivingMethod />
          </div>
          <div className="mb-4">
            <RecentTransactions />
          </div>
          <div className="mb-4">
            <ReleaseCatalog />
          </div>
          <div className="mb-4">
            <RollerShades />
          </div>
          <div className="mb-4">
            <SavingsProgress />
          </div>
          <div className="mb-4">
            <SavingsTargets />
          </div>
          <div className="mb-4">
            <SidebarNav />
          </div>
          <div className="mb-4">
            <SocialLinks />
          </div>
          <div className="mb-4">
            <StockPerformance />
          </div>
          <div className="mb-4">
            <SyncingState />
          </div>
          <div className="mb-4">
            <TransferFunds />
          </div>
          <div className="mb-4">
            <UpcomingPayments />
          </div>
        </div>
      </div>
    </div>
  )
}
