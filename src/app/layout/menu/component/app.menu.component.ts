import { VisacompanymasterComponent } from './../../../routes/view/master/visacompanymaster/visacompanymaster.component';
import {Component, OnInit} from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/']},
            {
              label: 'Master', icon: 'fa fa-fw fa-gg',
              items: [
                  {
                      label: 'Currency', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/currencymaster']
                  },
                  {
                      label: 'Company Master', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/companymaster']
                  },
                  {
                      label: 'Visa Company Master', icon: 'fa fa-fw fa-sign-in',  routerLink: ['/master/visacompanymaster']
                  },
                  {
                      label: 'Staff Master', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/staffmaster']
                  },
                  {
                      label: 'Department Master', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/departmentmaster']
                  },
                  {
                      label: 'Designation Master', icon: 'fa fa-fw fa-sign-in', routerLink: ['/master/designationmaster']
                  },
                  {
                      label: 'Visa Company Designation', icon: 'fa fa-fw fa-sign-in',routerLink: ['/master/visacompanydesignation']
                  },
                  {
                      routerLink: ['/master/cadermaster'],
                      label : 'Cader Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/grade'],
                      label: 'Grade / Level',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/qualification'],
                      label: 'Qualification Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/language'],
                      label: 'Language',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/gratuityamountpolicy'],
                      label: 'Gratuity Amount Policy',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/leavesalaryamountpolicy'],
                      label: 'Leave Salary Amount Policy',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/nationalmaster'],
                      label: 'Nationality Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/bloodgroup'],
                      label: 'Blood Group',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/religionmaster'],
                      label: 'Religion Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/relationmaster'],
                      label: 'Relation Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/shifttype'],
                      label: 'Shift Types',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/shiftmaster'],
                      label: 'Shift Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/documenttype'],
                      label: 'Document Type',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/sitemaster'],
                      label: 'Site Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/agentmaster'],
                      label: 'Agent Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/bankmaster'],
                      label: 'Bank Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/addresstypes'],
                      label: 'Address Type',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/stafftype'],
                      label: 'Staff Type',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/leavetypes'],
                      label: 'Leave Type',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/vehiclemaster'],
                      label: 'Vehicle Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/salaryheads'],
                      label: 'Salary Heads',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/assetmaster'],
                      label: 'Asset Master',
                      icon: 'fa fa-fw fa-sign-in'
                    },
                    {
                      routerLink: ['/master/airportlocation'],
                      label: 'Airport Location',
                      icon: 'fa fa-fw fa-sign-in'
                    }
                    
              ]
          },
          {
              label: 'Account', icon: 'fa fa-fw fa-book',
              items: [
                  {label: 'Menu1', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                  {label: 'Menu2', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
              ]
          },
          {
              label: 'Store And WareHouses', icon: 'fa fa-fw fa-book',
              items: [
                  {label: 'Menu1', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                  {label: 'Menu2', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
              ]
          },
          {
              label: 'Sales', icon: 'fa fa-fw fa-book',
              items: [
                  {label: 'Menu1', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                  {label: 'Menu2', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
              ]
          },
          {
              label: 'Procurement', icon: 'fa fa-fw fa-book',
              items: [
                  {label: 'Menu1', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                  {label: 'Menu2', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
              ]
          },
          {
              label: 'MIS Report', icon: 'fa fa-fw fa-book',
              items: [
                  {label: 'Menu1', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                  {label: 'Menu2', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
              ]
          },
          {
              label: 'Administration', icon: 'fa fa-fw fa-book',
              items: [
                  {label: 'Menu1', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                  {label: 'Menu2', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
              ]
          }, {
            label: 'Transaction', icon: 'fa fa-fw fa-book',
            items: [
              {
                label: 'Loan Entry', icon: 'fa fa-fw fa-sign-in', routerLink: ['/transaction/Loanentry']
            },
                {label: 'Menu1', icon: 'fa fa-fw fa-gear', routerLink: ['/documentation']},
                {label: 'Menu2', icon: 'fa fa-fw fa-wrench', routerLink: ['/utils']}
            ]
        },
      ];
  }

    changeTheme(theme) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const href = 'assets/theme/theme-' + theme + '.css';

        this.replaceLink(themeLink, href);
    }
    changeLayout(layout) {
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const href = 'assets/layout/css/layout-' + layout + '.css';

        this.replaceLink(layoutLink, href);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    onMenuClick() {
        this.app.onMenuClick();
    }
}
