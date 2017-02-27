import { BaseModel } from './base.model';
import { FieldMapper } from '../decorators/field-mapper.decorator';
import { Snapshot } from './snapshot.model';
import { DiskOffering } from './disk-offering.model';
import { ZoneName } from '../decorators/zone-name.decorator';


@ZoneName()
@FieldMapper({
  diskofferingid: 'diskOfferingId',
  diskofferingname: 'diskOfferingName',
  provisioningtype: 'provisioningType',
  storagetype: 'storageType',
  virtualmachineid: 'virtualMachineId',
  zonename: 'zoneName'
})
export class Volume extends BaseModel {
  public id: string;
  public created: string;
  public domain: string;
  public diskOffering: DiskOffering;
  public diskOfferingId: string;
  public name: string;
  public state: string;
  public size: number;
  public virtualMachineId: string;
  public provisioningType: string;
  public snapshots: Array<Snapshot>;
  public storageType: string;
  public type: string;
  public zoneName: string;
}
