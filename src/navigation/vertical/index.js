// ** Icon imports
import Table from 'mdi-material-ui/Table'
import ChartDonut from 'mdi-material-ui/ChartDonut'
import FormSelect from 'mdi-material-ui/FormSelect'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import LockOutline from 'mdi-material-ui/LockOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import BankMinus from 'mdi-material-ui/BankMinus'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import ArchiveOutline from 'mdi-material-ui/ArchiveOutline'
import DotsHorizontal from 'mdi-material-ui/DotsHorizontal'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import DatabaseSettingsOutline from 'mdi-material-ui/DatabaseSettingsOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import VectorArrangeBelow from 'mdi-material-ui/VectorArrangeBelow'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import PackageVariantClosed from 'mdi-material-ui/PackageVariantClosed'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import CheckboxMarkedCircleOutline from 'mdi-material-ui/CheckboxMarkedCircleOutline'
import HumanGreetingProximity from 'mdi-material-ui/HumanGreetingProximity'


const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: HomeOutline,
      path: '/admin/'
    },
    {
      title: 'User',
      icon: AccountOutline,
      children: [
        {
          title: 'Manage Employee',
          path: '/admin/employee'
        },
        {
          title: 'Manage Associate',
          path: '/admin/associate'
        },
        {
          title: 'Manage Customer',
          path: '/admin/customer'
        },
      ]
    },
    {
      title: 'Invesment',
      icon: FileDocumentOutline,
      children: [
        
        {
          title: 'Pending',
          path: '/admin/invesment/pending'
        },
        {
          title: 'Withdrwal',
          path: '/admin/invesment/withdrwal'
        },
        {
          title: 'Closed',
          path: '/admin/invesment/close'
        },
        
        {
          title: 'All',
          path: '/admin/invesment/all'
        },
      ]
    },
    {
      title: 'Deposit',
      icon: CreditCardOutline,
      children: [
        {
          title: 'Pending',
          path: '/admin/deposit/pending'
        },
        {
          title: 'Approved',
          path: '/admin/deposit/approve'
        },
        {
          title: 'Rejected',
          path: '/admin/deposit/rejected'
        },
        {
          title: 'All',
          path: '/admin/deposit/all'
        }
      ]
    },
    {
      title: 'Withdrwal',
      icon: BankMinus,
      children: [
        {
          title: 'Pending',
          path: '/admin/withdrwal/pending'
        },
        {
          title: 'Approved',
          path: '/admin/withdrwal/approve'
        },
        {
          title: 'Rejected',
          path: '/admin/withdrwal/rejected'
        },
        {
          title: 'All',
          path: '/admin/withdrwal/all'
        }
      ]
    },
    {
      title: 'Request',
      icon: HumanGreetingProximity,
      children: [
        {
          title: 'CSP',
          path: '/admin/request/csp'
        },
        {
          title: 'BA',
          path: '/admin/request/ba'
        },
        {
          title: 'Contact Us',
          path: '/admin/request/contact'
        },
      ]
    },
    {
      title: 'Others',
      icon: DatabaseSettingsOutline,
      children: [
        {
          title: 'Manage Salary',
          path: '/admin/others/salary'
        },
        {
          title: 'Manage Designation',
          path: '/admin/others/designation'
        },
        {
          title: 'Manage Leave',
          path: '/admin/others/leave'
        }
      ]
    },
  ]
}

export default navigation
