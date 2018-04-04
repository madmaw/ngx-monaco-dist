/// <reference path="../../src/typings/monaco-editor/monaco.d.ts" />
import { ElementRef, OnInit, EventEmitter, OnDestroy, OnChanges, AfterViewChecked, SimpleChanges } from '@angular/core';
import { MonacoEditorService } from '../../services/monaco-editor.service';
import { MonacoFile } from '../../entities/file';
import { MonacoEditorOptions } from '../../entities/editor-options';
export declare class MonacoEditorDirective implements OnInit, OnDestroy, OnChanges, AfterViewChecked {
    private monacoEditorService;
    private editorRef;
    theme: string;
    file: MonacoFile;
    options: MonacoEditorOptions;
    ready: EventEmitter<{}>;
    fileChange: EventEmitter<MonacoFile>;
    private resize$;
    private destroy$;
    constructor(monacoEditorService: MonacoEditorService, editorRef: ElementRef);
    onResize(): void;
    /**
     * Open the provided file with the editor.
     *
     * @param file File to open.
     */
    open(file: MonacoFile): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewChecked(): void;
}
