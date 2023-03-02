import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


const routes: Routes = [

    {
        path: 'doc',
        loadChildren: () => import(
            /* webpackChunkName: "doc" */
            './pages/doc/doc.module'
        ).then(m => m.DocModule)
    }

]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            enableTracing: false,
            preloadingStrategy: PreloadAllModules
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
