"use strict";
{

    const PLUGIN_ID = "Sparsha_copyclip";
    // const PLUGIN_VERSION = "2.1.0";
    const PLUGIN_CATEGORY = "general";

    const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.Sparsha_copyclip = class copyclipPlugin extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Sparsha");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([

            ]);

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}