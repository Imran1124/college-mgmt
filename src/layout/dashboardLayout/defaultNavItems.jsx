/* eslint-disable no-unused-vars */
import React from 'react';
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { BiMoneyWithdraw } from 'react-icons/bi';
// define a NavItem prop

export const defaultNavItems = [
  {
    id: '1',
    label: 'Dashboard',
    href: '/home',
    icon: <HomeIcon className="w-7 h-7" />
  },
  {
    id: '2',
    label: 'Student Mgmt.',
    // href: '/student',
    icon: <UserGroupIcon className="w-7 h-7" />,
    sub: [
      {
        id: '1',
        label: 'Add FY Master',
        href: '/student/fy-master'
      },
      {
        id: '2',
        label: 'Add Class Master',
        href: '/student/class-master'
      },
      {
        id: '3',
        label: 'Add Bulk Students',
        href: '/student/bulk-entry'
      },
      {
        id: '4',
        label: 'Add New Student',
        href: '/add-new-student'
      },
      {
        id: '5',
        label: 'View Students List',
        href: '/student/view'
      }
    ]
  },
  {
    id: '3',
    label: 'Fee Mgmt.',
    // href: '/fee',
    icon: <BiMoneyWithdraw className="w-7 h-7" />,
    sub: [
      {
        id: '0',
        label: 'Add Fee Head',
        href: '/fee/fee-head'
      },
      {
        id: '1',
        label: 'Add Class Fee Master',
        href: '/fee/add'
      },
      {
        id: '2',
        label: 'Class Fee Master List',
        href: '/fee/table-view'
      },
      {
        id: '3',
        label: 'Fee Collection',
        href: '/fee/fee-collection'
      },
      {
        id: '4',
        label: 'Search Fee Receipt',
        href: '/fee/generate-receipt'
      }

      //
      // {
      //   id: '5',
      //   label: 'Daily Fee Collection',
      //   href: '/fee/daily-fee-collection'
      // }
    ]
  },
  {
    id: '4',
    label: 'Report',
    // href: '/calendar',
    icon: <CalendarIcon className="w-7 h-7" />,
    sub: [
      {
        id: '1',
        label: 'Class Wise Fee Report',
        href: '/fee/report'
      },
      // {
      //   id: '5',
      //   label: 'Comparison Report',
      //   href: '/fee/comparison-report'
      // },
      {
        id: '6',
        label: 'Class Wise Demand Report',
        href: '/fee/class-wise-demand-report'
      }
    ]
  }
];
