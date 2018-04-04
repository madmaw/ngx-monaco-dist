import { ModuleWithProviders } from '@angular/core';
import { MonacoEditorOptions } from './entities/editor-options';
export declare class MonacoEditorModule {
    static forRoot(config?: {
        options?: MonacoEditorOptions;
    }): ModuleWithProviders;
}
