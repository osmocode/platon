import { OverlayModule } from "@angular/cdk/overlay";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";

// The modules should be imported into app module to be usabled in lazy loaded modules.
// https://github.com/angular/components/issues/19335
export const MaterialImports = [
    OverlayModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
]
