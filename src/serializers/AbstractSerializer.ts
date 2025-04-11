import { JSONOutput } from 'typedoc';

export abstract class AbstractSerializer<T = any> {
    public constructor(public declaration: JSONOutput.DeclarationReflection) {}

    public abstract serialize(): T;
}
