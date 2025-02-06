"use strict";
{
    globalThis.C3.Plugins.Sparsha_copyclip.Exps = {
        clipboardData()
        {
            return this.GetText;
        },

        error()
        {
            return this.errorClipboard;
        }
    };
}