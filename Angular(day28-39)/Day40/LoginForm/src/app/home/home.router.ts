import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserStoreComponent } from "./user-store/user-store.component";
import { UserDeleteComponent } from "./user-delete/user-delete.component";
import { UserUpdateComponent } from "./user-update/user-update.component";
import { AuthGuard } from "../guards/auth.guard";




export const HomeRoutes : Route[] = [
    {
        path:"", component:HomeComponent,
        canActivate:[AuthGuard],
        children:[
            {path: "", component: UserListComponent},
            {path: "userstore", component: UserStoreComponent},
            {path: "userdelete", component: UserDeleteComponent},
            {path: "userupdate", component: UserUpdateComponent},

        ]
    }
]