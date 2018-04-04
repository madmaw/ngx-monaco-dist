/// <reference path="../src/typings/monaco-editor/monaco.d.ts" />
import { ElementRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CompletionItemProvider } from '../entities/completion-item-provider';
import { MonacoEditorOptions } from '../entities/editor-options';
import { MonacoFile } from '../entities/file';
export declare class MonacoEditorService {
    private completionProviders;
    private editorOptions;
    private zone;
    private file;
    private monacoEditor;
    private onFileChange;
    fileChange$: Observable<MonacoFile>;
    bootstrap$: any;
    constructor(completionProviders: CompletionItemProvider[], editorOptions: MonacoEditorOptions, zone: NgZone);
    readonly editor: monaco.editor.IEditor;
    setDefaultJavascriptCompilerOptions(compilerOptions: monaco.languages.typescript.CompilerOptions): void;
    addDefaultJavascriptExtraLib(code: string, filename?: string): void;
    private registerCompletionProviders();
    private registerModelChangeListener(file, model);
    /**
     * Dispose all editor models
     */
    disposeModels(): void;
    /**
     * Bootstrap the monaco editor.
     *
     * @param container Container of the editor.
     * @param options Editor options.
     */
    load(container: ElementRef, options?: {
        theme?: string;
        editor?: MonacoEditorOptions;
    }): Observable<void>;
    /**
     * Open the provided file with the editor.
     *
     * @param file File to open.
     */
    open(file: MonacoFile): void;
    /**
     * Change the options of the editor.
     *
     * @param options Editor options.
     */
    updateOptions(options: monaco.editor.IEditorOptions): void;
    /**
     * Change the theme of the monaco editor.
     *
     * @param theme Name of the editor theme.
     */
    setTheme(theme: string): void;
}
