import { Component, Input, TemplateRef } from '@angular/core';
import { SearchBar } from '@platon/shared/ui/search';
@Component({
  selector: 'ui-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.scss']
})
export class SearchBannerComponent {
    @Input() bannerTitle!: string;
    @Input() bannerImage!: string;
    @Input() bannerActions?: TemplateRef<any>;
    @Input() bannerSearchBar!: SearchBar<any>;
    @Input() bannerCompletion?: TemplateRef<any>;
    @Input() bannerDescription!: string;

    get bannerImageUrl() {
        return `url(${this.bannerImage})`;
    }
}
