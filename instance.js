"use strict";
{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.Sparsha_copyclip;

    PLUGIN_CLASS.Instance = class copyclipInstance extends SDK.IInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
        }

        Release()
        {}

        OnCreate()
        {}

        OnPropertyChanged(id, value)
        {}

        LoadC2Property(name, valueString)
        {
            return false; // not handled
        }
    };
}