import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TechnologyComponent} from './technology/technology.component';
import {TechHistoryComponent} from './tech-history/tech-history.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {OurProductsComponent} from './our-products/our-products.component';


const appRoutes : Routes = [
    {
        path: 'technology',
        component: TechnologyComponent
    }, {
        path: 'tech-history',
        component: TechHistoryComponent
    }, {
        path: 'contact-us',
        component: ContactUsComponent
    }, {
        path: 'our-products',
        component: OurProductsComponent
    }, {
        path: '',
        redirectTo: '/technology',
        pathMatch: 'full'
    }, {
        path: '**',
        component: TechnologyComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}