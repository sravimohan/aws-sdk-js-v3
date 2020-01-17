import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateResolverEndpointIpAddressRequest {
  __type?: "AssociateResolverEndpointIpAddressRequest";
  /**
   *
   * 		       <p>Either the IPv4 address that you want to add to a resolver endpoint or a subnet ID. If you specify a subnet ID,
   * 			Resolver chooses an IP address for you from the available IPs in the specified subnet.</p>
   *
   */
  IpAddress: IpAddressUpdate | undefined;

  /**
   *
   * 		       <p>The ID of the resolver endpoint that you want to associate IP addresses with.</p>
   *
   */
  ResolverEndpointId: string | undefined;
}

export namespace AssociateResolverEndpointIpAddressRequest {
  export function isa(o: any): o is AssociateResolverEndpointIpAddressRequest {
    return _smithy.isa(o, "AssociateResolverEndpointIpAddressRequest");
  }
}

export interface AssociateResolverEndpointIpAddressResponse
  extends $MetadataBearer {
  __type?: "AssociateResolverEndpointIpAddressResponse";
  /**
   *
   * 		       <p>The response to an <code>AssociateResolverEndpointIpAddress</code> request.</p>
   *
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace AssociateResolverEndpointIpAddressResponse {
  export function isa(o: any): o is AssociateResolverEndpointIpAddressResponse {
    return _smithy.isa(o, "AssociateResolverEndpointIpAddressResponse");
  }
}

export interface AssociateResolverRuleRequest {
  __type?: "AssociateResolverRuleRequest";
  /**
   *
   * 		       <p>A name for the association that you're creating between a resolver rule and a VPC.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The ID of the resolver rule that you want to associate with the VPC. To list the existing resolver rules, use
   * 			<a>ListResolverRules</a>.</p>
   *
   */
  ResolverRuleId: string | undefined;

  /**
   *
   * 		       <p>The ID of the VPC that you want to associate the resolver rule with.</p>
   *
   */
  VPCId: string | undefined;
}

export namespace AssociateResolverRuleRequest {
  export function isa(o: any): o is AssociateResolverRuleRequest {
    return _smithy.isa(o, "AssociateResolverRuleRequest");
  }
}

export interface AssociateResolverRuleResponse extends $MetadataBearer {
  __type?: "AssociateResolverRuleResponse";
  /**
   *
   * 		       <p>Information about the <code>AssociateResolverRule</code> request, including the status of the request.</p>
   *
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

export namespace AssociateResolverRuleResponse {
  export function isa(o: any): o is AssociateResolverRuleResponse {
    return _smithy.isa(o, "AssociateResolverRuleResponse");
  }
}

export interface CreateResolverEndpointRequest {
  __type?: "CreateResolverEndpointRequest";
  /**
   *
   * 		       <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice.
   * 			<code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. </p>
   *
   */
  CreatorRequestId: string | undefined;

  /**
   *
   * 		       <p>Specify the applicable value:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>INBOUND</code>: Resolver forwards DNS queries to the DNS service for a VPC from your network or another VPC</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTBOUND</code>: Resolver forwards DNS queries from the DNS service for a VPC to your network or another VPC</p>
   *             </li>
   *          </ul>
   *
   */
  Direction: ResolverEndpointDirection | string | undefined;

  /**
   *
   * 		       <p>The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs to your network
   * 			(for outbound endpoints) or on the way from your network to your VPCs (for inbound resolver endpoints). </p>
   *
   */
  IpAddresses: Array<IpAddressRequest> | undefined;

  /**
   *
   * 		       <p>A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify
   * 			must include one or more inbound rules (for inbound resolver endpoints) or outbound rules (for outbound resolver endpoints).</p>
   *
   */
  SecurityGroupIds: Array<string> | undefined;

  /**
   *
   * 		       <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace CreateResolverEndpointRequest {
  export function isa(o: any): o is CreateResolverEndpointRequest {
    return _smithy.isa(o, "CreateResolverEndpointRequest");
  }
}

export interface CreateResolverEndpointResponse extends $MetadataBearer {
  __type?: "CreateResolverEndpointResponse";
  /**
   *
   * 		       <p>Information about the <code>CreateResolverEndpoint</code> request, including the status of the request.</p>
   *
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace CreateResolverEndpointResponse {
  export function isa(o: any): o is CreateResolverEndpointResponse {
    return _smithy.isa(o, "CreateResolverEndpointResponse");
  }
}

export interface CreateResolverRuleRequest {
  __type?: "CreateResolverRuleRequest";
  /**
   *
   * 		       <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice.
   * 			<code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp. </p>
   *
   */
  CreatorRequestId: string | undefined;

  /**
   *
   * 		       <p>DNS queries for this domain name are forwarded to the IP addresses that you specify in <code>TargetIps</code>. If a query matches
   * 			multiple resolver rules (example.com and www.example.com), outbound DNS queries are routed using the resolver rule that contains
   * 			the most specific domain name (www.example.com).</p>
   *
   */
  DomainName: string | undefined;

  /**
   *
   * 		       <p>A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The ID of the outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify
   * 			in <code>TargetIps</code>.</p>
   *
   */
  ResolverEndpointId?: string;

  /**
   *
   * 		       <p>Specify <code>FORWARD</code>. Other resolver rule types aren't supported.</p>
   *
   */
  RuleType: RuleTypeOption | string | undefined;

  /**
   *
   * 		       <p>A list of the tag keys and values that you want to associate with the endpoint.</p>
   *
   */
  Tags?: Array<Tag>;

  /**
   *
   * 		       <p>The IPs that you want Resolver to forward DNS queries to. You can specify only IPv4 addresses. Separate IP addresses with a comma.</p>
   *
   */
  TargetIps?: Array<TargetAddress>;
}

export namespace CreateResolverRuleRequest {
  export function isa(o: any): o is CreateResolverRuleRequest {
    return _smithy.isa(o, "CreateResolverRuleRequest");
  }
}

export interface CreateResolverRuleResponse extends $MetadataBearer {
  __type?: "CreateResolverRuleResponse";
  /**
   *
   * 		       <p>Information about the <code>CreateResolverRule</code> request, including the status of the request.</p>
   *
   */
  ResolverRule?: ResolverRule;
}

export namespace CreateResolverRuleResponse {
  export function isa(o: any): o is CreateResolverRuleResponse {
    return _smithy.isa(o, "CreateResolverRuleResponse");
  }
}

export interface DeleteResolverEndpointRequest {
  __type?: "DeleteResolverEndpointRequest";
  /**
   *
   * 		       <p>The ID of the resolver endpoint that you want to delete.</p>
   *
   */
  ResolverEndpointId: string | undefined;
}

export namespace DeleteResolverEndpointRequest {
  export function isa(o: any): o is DeleteResolverEndpointRequest {
    return _smithy.isa(o, "DeleteResolverEndpointRequest");
  }
}

export interface DeleteResolverEndpointResponse extends $MetadataBearer {
  __type?: "DeleteResolverEndpointResponse";
  /**
   *
   * 		       <p>Information about the <code>DeleteResolverEndpoint</code> request, including the status of the request.</p>
   *
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace DeleteResolverEndpointResponse {
  export function isa(o: any): o is DeleteResolverEndpointResponse {
    return _smithy.isa(o, "DeleteResolverEndpointResponse");
  }
}

export interface DeleteResolverRuleRequest {
  __type?: "DeleteResolverRuleRequest";
  /**
   *
   * 		       <p>The ID of the resolver rule that you want to delete.</p>
   *
   */
  ResolverRuleId: string | undefined;
}

export namespace DeleteResolverRuleRequest {
  export function isa(o: any): o is DeleteResolverRuleRequest {
    return _smithy.isa(o, "DeleteResolverRuleRequest");
  }
}

export interface DeleteResolverRuleResponse extends $MetadataBearer {
  __type?: "DeleteResolverRuleResponse";
  /**
   *
   * 		       <p>Information about the <code>DeleteResolverRule</code> request, including the status of the request.</p>
   *
   */
  ResolverRule?: ResolverRule;
}

export namespace DeleteResolverRuleResponse {
  export function isa(o: any): o is DeleteResolverRuleResponse {
    return _smithy.isa(o, "DeleteResolverRuleResponse");
  }
}

export interface DisassociateResolverEndpointIpAddressRequest {
  __type?: "DisassociateResolverEndpointIpAddressRequest";
  /**
   *
   * 		       <p>The IPv4 address that you want to remove from a resolver endpoint.</p>
   *
   */
  IpAddress: IpAddressUpdate | undefined;

  /**
   *
   * 		       <p>The ID of the resolver endpoint that you want to disassociate an IP address from.</p>
   *
   */
  ResolverEndpointId: string | undefined;
}

export namespace DisassociateResolverEndpointIpAddressRequest {
  export function isa(
    o: any
  ): o is DisassociateResolverEndpointIpAddressRequest {
    return _smithy.isa(o, "DisassociateResolverEndpointIpAddressRequest");
  }
}

export interface DisassociateResolverEndpointIpAddressResponse
  extends $MetadataBearer {
  __type?: "DisassociateResolverEndpointIpAddressResponse";
  /**
   *
   * 		       <p>The response to an <code>DisassociateResolverEndpointIpAddress</code> request.</p>
   *
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace DisassociateResolverEndpointIpAddressResponse {
  export function isa(
    o: any
  ): o is DisassociateResolverEndpointIpAddressResponse {
    return _smithy.isa(o, "DisassociateResolverEndpointIpAddressResponse");
  }
}

export interface DisassociateResolverRuleRequest {
  __type?: "DisassociateResolverRuleRequest";
  /**
   *
   * 		       <p>The ID of the resolver rule that you want to disassociate from the specified VPC.</p>
   *
   */
  ResolverRuleId: string | undefined;

  /**
   *
   * 		       <p>The ID of the VPC that you want to disassociate the resolver rule from.</p>
   *
   */
  VPCId: string | undefined;
}

export namespace DisassociateResolverRuleRequest {
  export function isa(o: any): o is DisassociateResolverRuleRequest {
    return _smithy.isa(o, "DisassociateResolverRuleRequest");
  }
}

export interface DisassociateResolverRuleResponse extends $MetadataBearer {
  __type?: "DisassociateResolverRuleResponse";
  /**
   *
   * 		       <p>Information about the <code>DisassociateResolverRule</code> request, including the status of the request.</p>
   *
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

export namespace DisassociateResolverRuleResponse {
  export function isa(o: any): o is DisassociateResolverRuleResponse {
    return _smithy.isa(o, "DisassociateResolverRuleResponse");
  }
}

/**
 *
 * 		       <p>For <code>List</code> operations, an optional specification to return a subset of objects, such as resolver endpoints or resolver rules.</p>
 *
 */
export interface Filter {
  __type?: "Filter";
  /**
   *
   * 		       <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as resolver endpoints or resolver rules,
   * 			the name of the parameter that you want to use to filter objects. For example, to list only inbound resolver endpoints, specify
   * 			<code>Direction</code> for the value of <code>Name</code>.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>When you're using a <code>List</code> operation and you want the operation to return a subset of objects, such as resolver endpoints or resolver rules,
   * 			the value of the parameter that you want to use to filter objects. For example, to list only inbound resolver endpoints, specify
   * 			<code>INBOUND</code> for the value of <code>Values</code>.</p>
   *
   */
  Values?: Array<string>;
}

export namespace Filter {
  export function isa(o: any): o is Filter {
    return _smithy.isa(o, "Filter");
  }
}

export interface GetResolverEndpointRequest {
  __type?: "GetResolverEndpointRequest";
  /**
   *
   * 		       <p>The ID of the resolver endpoint that you want to get information about.</p>
   *
   */
  ResolverEndpointId: string | undefined;
}

export namespace GetResolverEndpointRequest {
  export function isa(o: any): o is GetResolverEndpointRequest {
    return _smithy.isa(o, "GetResolverEndpointRequest");
  }
}

export interface GetResolverEndpointResponse extends $MetadataBearer {
  __type?: "GetResolverEndpointResponse";
  /**
   *
   * 		       <p>Information about the resolver endpoint that you specified in a <code>GetResolverEndpoint</code> request.</p>
   *
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace GetResolverEndpointResponse {
  export function isa(o: any): o is GetResolverEndpointResponse {
    return _smithy.isa(o, "GetResolverEndpointResponse");
  }
}

export interface GetResolverRuleAssociationRequest {
  __type?: "GetResolverRuleAssociationRequest";
  /**
   *
   * 		       <p>The ID of the resolver rule association that you want to get information about.</p>
   *
   */
  ResolverRuleAssociationId: string | undefined;
}

export namespace GetResolverRuleAssociationRequest {
  export function isa(o: any): o is GetResolverRuleAssociationRequest {
    return _smithy.isa(o, "GetResolverRuleAssociationRequest");
  }
}

export interface GetResolverRuleAssociationResponse extends $MetadataBearer {
  __type?: "GetResolverRuleAssociationResponse";
  /**
   *
   * 		       <p>Information about the resolver rule association that you specified in a <code>GetResolverRuleAssociation</code> request.</p>
   *
   */
  ResolverRuleAssociation?: ResolverRuleAssociation;
}

export namespace GetResolverRuleAssociationResponse {
  export function isa(o: any): o is GetResolverRuleAssociationResponse {
    return _smithy.isa(o, "GetResolverRuleAssociationResponse");
  }
}

export interface GetResolverRulePolicyRequest {
  __type?: "GetResolverRulePolicyRequest";
  /**
   *
   * 		       <p>The ID of the resolver rule policy that you want to get information about.</p>
   *
   */
  Arn: string | undefined;
}

export namespace GetResolverRulePolicyRequest {
  export function isa(o: any): o is GetResolverRulePolicyRequest {
    return _smithy.isa(o, "GetResolverRulePolicyRequest");
  }
}

export interface GetResolverRulePolicyResponse extends $MetadataBearer {
  __type?: "GetResolverRulePolicyResponse";
  /**
   *
   * 		       <p>Information about the resolver rule policy that you specified in a <code>GetResolverRulePolicy</code> request.</p>
   *
   */
  ResolverRulePolicy?: string;
}

export namespace GetResolverRulePolicyResponse {
  export function isa(o: any): o is GetResolverRulePolicyResponse {
    return _smithy.isa(o, "GetResolverRulePolicyResponse");
  }
}

export interface GetResolverRuleRequest {
  __type?: "GetResolverRuleRequest";
  /**
   *
   * 		       <p>The ID of the resolver rule that you want to get information about.</p>
   *
   */
  ResolverRuleId: string | undefined;
}

export namespace GetResolverRuleRequest {
  export function isa(o: any): o is GetResolverRuleRequest {
    return _smithy.isa(o, "GetResolverRuleRequest");
  }
}

export interface GetResolverRuleResponse extends $MetadataBearer {
  __type?: "GetResolverRuleResponse";
  /**
   *
   * 		       <p>Information about the resolver rule that you specified in a <code>GetResolverRule</code> request.</p>
   *
   */
  ResolverRule?: ResolverRule;
}

export namespace GetResolverRuleResponse {
  export function isa(o: any): o is GetResolverRuleResponse {
    return _smithy.isa(o, "GetResolverRuleResponse");
  }
}

/**
 *
 * 		       <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 */
export interface InternalServiceErrorException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalServiceErrorException";
  name: "InternalServiceErrorException";
  $fault: "client";
  Message?: string;
}

export namespace InternalServiceErrorException {
  export function isa(o: any): o is InternalServiceErrorException {
    return _smithy.isa(o, "InternalServiceErrorException");
  }
}

/**
 *
 * 		       <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 *
 */
export interface InvalidNextTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidNextTokenException";
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return _smithy.isa(o, "InvalidNextTokenException");
  }
}

/**
 *
 * 		       <p>One or more parameters in this request are not valid.</p>
 *
 */
export interface InvalidParameterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidParameterException";
  name: "InvalidParameterException";
  $fault: "client";
  /**
   *
   * 		       <p>For an <code>InvalidParameterException</code> error, the name of the parameter that's invalid.</p>
   *
   */
  FieldName?: string;

  Message: string | undefined;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return _smithy.isa(o, "InvalidParameterException");
  }
}

/**
 *
 * 		       <p>The specified resolver rule policy is invalid.</p>
 *
 */
export interface InvalidPolicyDocument
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidPolicyDocument";
  name: "InvalidPolicyDocument";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPolicyDocument {
  export function isa(o: any): o is InvalidPolicyDocument {
    return _smithy.isa(o, "InvalidPolicyDocument");
  }
}

/**
 *
 * 		       <p>The request is invalid.</p>
 *
 */
export interface InvalidRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRequestException";
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return _smithy.isa(o, "InvalidRequestException");
  }
}

/**
 *
 * 		       <p>The specified tag is invalid.</p>
 *
 */
export interface InvalidTagException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidTagException";
  name: "InvalidTagException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTagException {
  export function isa(o: any): o is InvalidTagException {
    return _smithy.isa(o, "InvalidTagException");
  }
}

/**
 *
 * 		       <p>In an <a>CreateResolverEndpoint</a> request, a subnet and IP address that you want to use for DNS queries.</p>
 *
 */
export interface IpAddressRequest {
  __type?: "IpAddressRequest";
  /**
   *
   * 		       <p>The IP address that you want to use for DNS queries.</p>
   *
   */
  Ip?: string;

  /**
   *
   * 		       <p>The subnet that contains the IP address.</p>
   *
   */
  SubnetId: string | undefined;
}

export namespace IpAddressRequest {
  export function isa(o: any): o is IpAddressRequest {
    return _smithy.isa(o, "IpAddressRequest");
  }
}

/**
 *
 * 		       <p>In the response to a <a>GetResolverEndpoint</a> request, information about the IP addresses that
 * 			the resolver endpoint uses for DNS queries.</p>
 *
 */
export interface IpAddressResponse {
  __type?: "IpAddressResponse";
  /**
   *
   * 		       <p>The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   *
   */
  CreationTime?: string;

  /**
   *
   * 		       <p>One IP address that the resolver endpoint uses for DNS queries.</p>
   *
   */
  Ip?: string;

  /**
   *
   * 		       <p>The ID of one IP address.</p>
   *
   */
  IpId?: string;

  /**
   *
   * 		       <p>The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   *
   */
  ModificationTime?: string;

  /**
   *
   * 		       <p>A status code that gives the current status of the request.</p>
   *
   */
  Status?: IpAddressStatus | string;

  /**
   *
   * 		       <p>A message that provides additional information about the status of the request.</p>
   *
   */
  StatusMessage?: string;

  /**
   *
   * 		       <p>The ID of one subnet.</p>
   *
   */
  SubnetId?: string;
}

export namespace IpAddressResponse {
  export function isa(o: any): o is IpAddressResponse {
    return _smithy.isa(o, "IpAddressResponse");
  }
}

export enum IpAddressStatus {
  Attached = "ATTACHED",
  Attaching = "ATTACHING",
  Creating = "CREATING",
  DeleteFailedFasExpired = "DELETE_FAILED_FAS_EXPIRED",
  Deleting = "DELETING",
  Detaching = "DETACHING",
  FailedCreation = "FAILED_CREATION",
  FailedResourceGone = "FAILED_RESOURCE_GONE",
  RemapAttaching = "REMAP_ATTACHING",
  RemapDetaching = "REMAP_DETACHING"
}

/**
 *
 * 		       <p>In an <a>UpdateResolverEndpoint</a> request, information about an IP address to update.</p>
 *
 */
export interface IpAddressUpdate {
  __type?: "IpAddressUpdate";
  /**
   *
   * 		       <p>The new IP address.</p>
   *
   */
  Ip?: string;

  /**
   *
   * 		       <p>
   *             <i>Only when removing an IP address from a resolver endpoint</i>: The ID of the IP address that you want to remove.
   * 			To get this ID, use <a>GetResolverEndpoint</a>.</p>
   *
   */
  IpId?: string;

  /**
   *
   * 		       <p>The ID of the subnet that includes the IP address that you want to update. To get this ID, use <a>GetResolverEndpoint</a>.</p>
   *
   */
  SubnetId?: string;
}

export namespace IpAddressUpdate {
  export function isa(o: any): o is IpAddressUpdate {
    return _smithy.isa(o, "IpAddressUpdate");
  }
}

/**
 *
 * 		       <p>The request caused one or more limits to be exceeded.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>For a <code>LimitExceededException</code> error, the type of resource that exceeded the current limit.</p>
   *
   */
  ResourceType?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

export interface ListResolverEndpointIpAddressesRequest {
  __type?: "ListResolverEndpointIpAddressesRequest";
  /**
   *
   * 		       <p>The maximum number of IP addresses that you want to return in the response to a <code>ListResolverEndpointIpAddresses</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 IP addresses. </p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>For the first <code>ListResolverEndpointIpAddresses</code> request, omit this value.</p>
   * 		       <p>If the specified resolver endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The ID of the resolver endpoint that you want to get IP addresses for.</p>
   *
   */
  ResolverEndpointId: string | undefined;
}

export namespace ListResolverEndpointIpAddressesRequest {
  export function isa(o: any): o is ListResolverEndpointIpAddressesRequest {
    return _smithy.isa(o, "ListResolverEndpointIpAddressesRequest");
  }
}

export interface ListResolverEndpointIpAddressesResponse
  extends $MetadataBearer {
  __type?: "ListResolverEndpointIpAddressesResponse";
  /**
   *
   * 		       <p>The IP addresses that DNS queries pass through on their way to your network (outbound endpoint) or on the way to
   * 			Resolver (inbound endpoint).</p>
   *
   */
  IpAddresses?: Array<IpAddressResponse>;

  /**
   *
   * 		       <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>If the specified endpoint has more than <code>MaxResults</code> IP addresses, you can submit another
   * 			<code>ListResolverEndpointIpAddresses</code> request to get the next group of IP addresses. In the next request,
   * 			specify the value of <code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;
}

export namespace ListResolverEndpointIpAddressesResponse {
  export function isa(o: any): o is ListResolverEndpointIpAddressesResponse {
    return _smithy.isa(o, "ListResolverEndpointIpAddressesResponse");
  }
}

export interface ListResolverEndpointsRequest {
  __type?: "ListResolverEndpointsRequest";
  /**
   *
   * 		       <p>An optional specification to return a subset of resolver endpoints, such as all inbound resolver endpoints.</p>
   * 		       <note>
   *             <p>If you submit a second or subsequent <code>ListResolverEndpoints</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   *
   *
   *
   */
  Filters?: Array<Filter>;

  /**
   *
   * 		       <p>The maximum number of resolver endpoints that you want to return in the response to a <code>ListResolverEndpoints</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 resolver endpoints. </p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>For the first <code>ListResolverEndpoints</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> resolver endpoints, you can submit another <code>ListResolverEndpoints</code> request
   * 			to get the next group of resolver endpoints. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;
}

export namespace ListResolverEndpointsRequest {
  export function isa(o: any): o is ListResolverEndpointsRequest {
    return _smithy.isa(o, "ListResolverEndpointsRequest");
  }
}

export interface ListResolverEndpointsResponse extends $MetadataBearer {
  __type?: "ListResolverEndpointsResponse";
  /**
   *
   * 		       <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>If more than <code>MaxResults</code> IP addresses match the specified criteria, you can submit another <code>ListResolverEndpoint</code> request
   * 			to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The resolver endpoints that were created by using the current AWS account, and that match the specified filters, if any.</p>
   *
   */
  ResolverEndpoints?: Array<ResolverEndpoint>;
}

export namespace ListResolverEndpointsResponse {
  export function isa(o: any): o is ListResolverEndpointsResponse {
    return _smithy.isa(o, "ListResolverEndpointsResponse");
  }
}

export interface ListResolverRuleAssociationsRequest {
  __type?: "ListResolverRuleAssociationsRequest";
  /**
   *
   * 		       <p>An optional specification to return a subset of resolver rules, such as resolver rules that are associated with the same VPC ID.</p>
   * 		       <note>
   *             <p>If you submit a second or subsequent <code>ListResolverRuleAssociations</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   *
   *
   *
   */
  Filters?: Array<Filter>;

  /**
   *
   * 		       <p>The maximum number of rule associations that you want to return in the response to a <code>ListResolverRuleAssociations</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 rule associations. </p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>For the first <code>ListResolverRuleAssociation</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> rule associations, you can submit another <code>ListResolverRuleAssociation</code> request
   * 			to get the next group of rule associations. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;
}

export namespace ListResolverRuleAssociationsRequest {
  export function isa(o: any): o is ListResolverRuleAssociationsRequest {
    return _smithy.isa(o, "ListResolverRuleAssociationsRequest");
  }
}

export interface ListResolverRuleAssociationsResponse extends $MetadataBearer {
  __type?: "ListResolverRuleAssociationsResponse";
  /**
   *
   * 		       <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>If more than <code>MaxResults</code> rule associations match the specified criteria, you can submit another
   * 			<code>ListResolverRuleAssociation</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The associations that were created between resolver rules and VPCs using the current AWS account, and that match the
   * 			specified filters, if any.</p>
   *
   */
  ResolverRuleAssociations?: Array<ResolverRuleAssociation>;
}

export namespace ListResolverRuleAssociationsResponse {
  export function isa(o: any): o is ListResolverRuleAssociationsResponse {
    return _smithy.isa(o, "ListResolverRuleAssociationsResponse");
  }
}

export interface ListResolverRulesRequest {
  __type?: "ListResolverRulesRequest";
  /**
   *
   * 		       <p>An optional specification to return a subset of resolver rules, such as all resolver rules that are associated with the same resolver endpoint.</p>
   * 		       <note>
   *             <p>If you submit a second or subsequent <code>ListResolverRules</code> request and specify the <code>NextToken</code> parameter,
   * 			you must use the same values for <code>Filters</code>, if any, as in the previous request.</p>
   *          </note>
   *
   *
   *
   *
   */
  Filters?: Array<Filter>;

  /**
   *
   * 		       <p>The maximum number of resolver rules that you want to return in the response to a <code>ListResolverRules</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 resolver rules.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>For the first <code>ListResolverRules</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> resolver rules, you can submit another <code>ListResolverRules</code> request
   * 			to get the next group of resolver rules. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;
}

export namespace ListResolverRulesRequest {
  export function isa(o: any): o is ListResolverRulesRequest {
    return _smithy.isa(o, "ListResolverRulesRequest");
  }
}

export interface ListResolverRulesResponse extends $MetadataBearer {
  __type?: "ListResolverRulesResponse";
  /**
   *
   * 		       <p>The value that you specified for <code>MaxResults</code> in the request.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>If more than <code>MaxResults</code> resolver rules match the specified criteria, you can submit another
   * 			<code>ListResolverRules</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The resolver rules that were created using the current AWS account and that match the specified filters, if any.</p>
   *
   */
  ResolverRules?: Array<ResolverRule>;
}

export namespace ListResolverRulesResponse {
  export function isa(o: any): o is ListResolverRulesResponse {
    return _smithy.isa(o, "ListResolverRulesResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   *
   * 		       <p>The maximum number of tags that you want to return in the response to a <code>ListTagsForResource</code> request.
   * 			If you don't specify a value for <code>MaxResults</code>, Resolver returns up to 100 tags.</p>
   *
   */
  MaxResults?: number;

  /**
   *
   * 		       <p>For the first <code>ListTagsForResource</code> request, omit this value.</p>
   * 		       <p>If you have more than <code>MaxResults</code> tags, you can submit another <code>ListTagsForResource</code> request
   * 			to get the next group of tags for the resource. In the next request, specify the value of <code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the resource that you want to list tags for.</p>
   *
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return _smithy.isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse extends $MetadataBearer {
  __type?: "ListTagsForResourceResponse";
  /**
   *
   * 		       <p>If more than <code>MaxResults</code> tags match the specified criteria, you can submit another
   * 			<code>ListTagsForResource</code> request to get the next group of results. In the next request, specify the value of
   * 			<code>NextToken</code> from the previous response. </p>
   *
   */
  NextToken?: string;

  /**
   *
   * 		       <p>The tags that are associated with the resource that you specified in the <code>ListTagsForResource</code> request.</p>
   *
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return _smithy.isa(o, "ListTagsForResourceResponse");
  }
}

export interface PutResolverRulePolicyRequest {
  __type?: "PutResolverRulePolicyRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) of the account that you want to grant permissions to.</p>
   *
   */
  Arn: string | undefined;

  /**
   *
   * 		       <p>An AWS Identity and Access Management policy statement that lists the permissions that you want to grant to another AWS account.</p>
   *
   */
  ResolverRulePolicy: string | undefined;
}

export namespace PutResolverRulePolicyRequest {
  export function isa(o: any): o is PutResolverRulePolicyRequest {
    return _smithy.isa(o, "PutResolverRulePolicyRequest");
  }
}

/**
 *
 * 		       <p>The response to a <code>PutResolverRulePolicy</code> request.</p>
 *
 */
export interface PutResolverRulePolicyResponse extends $MetadataBearer {
  __type?: "PutResolverRulePolicyResponse";
  /**
   *
   * 		       <p>Whether the <code>PutResolverRulePolicy</code> request was successful.</p>
   *
   */
  ReturnValue?: boolean;
}

export namespace PutResolverRulePolicyResponse {
  export function isa(o: any): o is PutResolverRulePolicyResponse {
    return _smithy.isa(o, "PutResolverRulePolicyResponse");
  }
}

/**
 *
 * 		       <p>In the response to a <a>CreateResolverEndpoint</a>, <a>DeleteResolverEndpoint</a>, <a>GetResolverEndpoint</a>,
 * 			<a>ListResolverEndpoints</a>, or <a>UpdateResolverEndpoint</a> request, a complex type that contains settings
 * 			for an existing inbound or outbound resolver endpoint.</p>
 *
 */
export interface ResolverEndpoint {
  __type?: "ResolverEndpoint";
  /**
   *
   * 		       <p>The ARN (Amazon Resource Name) for the resolver endpoint.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).</p>
   *
   */
  CreationTime?: string;

  /**
   *
   * 		       <p>A unique string that identifies the request that created the resolver endpoint. The <code>CreatorRequestId</code> allows failed requests
   * 			to be retried without the risk of executing the operation twice.</p>
   *
   */
  CreatorRequestId?: string;

  /**
   *
   * 		       <p>Indicates whether the resolver endpoint allows inbound or outbound DNS queries:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>INBOUND</code>: allows DNS queries to your VPC from your network or another VPC</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTBOUND</code>: allows DNS queries from your VPC to your network or another VPC</p>
   *             </li>
   *          </ul>
   *
   */
  Direction?: ResolverEndpointDirection | string;

  /**
   *
   * 		       <p>The ID of the VPC that you want to create the resolver endpoint in.</p>
   *
   */
  HostVPCId?: string;

  /**
   *
   * 		       <p>The ID of the resolver endpoint.</p>
   *
   */
  Id?: string;

  /**
   *
   * 		       <p>The number of IP addresses that the resolver endpoint can use for DNS queries.</p>
   *
   */
  IpAddressCount?: number;

  /**
   *
   * 		       <p>The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).</p>
   *
   */
  ModificationTime?: string;

  /**
   *
   * 		       <p>The name that you assigned to the resolver endpoint when you submitted a <a>CreateResolverEndpoint</a> request.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound resolver rules.</p>
   *
   */
  SecurityGroupIds?: Array<string>;

  /**
   *
   * 		       <p>A code that specifies the current status of the resolver endpoint.</p>
   *
   */
  Status?: ResolverEndpointStatus | string;

  /**
   *
   * 		       <p>A detailed description of the status of the resolver endpoint.</p>
   *
   */
  StatusMessage?: string;
}

export namespace ResolverEndpoint {
  export function isa(o: any): o is ResolverEndpoint {
    return _smithy.isa(o, "ResolverEndpoint");
  }
}

export enum ResolverEndpointDirection {
  Inbound = "INBOUND",
  Outbound = "OUTBOUND"
}

export enum ResolverEndpointStatus {
  ActionNeeded = "ACTION_NEEDED",
  AutoRecovering = "AUTO_RECOVERING",
  Creating = "CREATING",
  Deleting = "DELETING",
  Operational = "OPERATIONAL",
  Updating = "UPDATING"
}

/**
 *
 * 		       <p>For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries
 * 			out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>,
 * 			<a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a>
 * 			request.</p>
 *
 */
export interface ResolverRule {
  __type?: "ResolverRule";
  /**
   *
   * 		       <p>The ARN (Amazon Resource Name) for the resolver rule specified by <code>Id</code>.</p>
   *
   */
  Arn?: string;

  /**
   *
   * 		       <p>A unique string that you specified when you created the resolver rule. <code>CreatorRequestId</code>identifies the request and allows failed requests
   * 			to be retried without the risk of executing the operation twice. </p>
   *
   */
  CreatorRequestId?: string;

  /**
   *
   * 		       <p>DNS queries for this domain name are forwarded to the IP addresses that are specified in <code>TargetIps</code>. If a query matches
   * 			multiple resolver rules (example.com and www.example.com), the query is routed using the resolver rule that contains the most specific domain name
   * 			(www.example.com).</p>
   *
   */
  DomainName?: string;

  /**
   *
   * 		       <p>The ID that Resolver assigned to the resolver rule when you created it.</p>
   *
   */
  Id?: string;

  /**
   *
   * 		       <p>The name for the resolver rule, which you specified when you created the resolver rule.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>When a rule is shared with another AWS account, the account ID of the account that the rule is shared with.</p>
   *
   */
  OwnerId?: string;

  /**
   *
   * 		       <p>The ID of the endpoint that the rule is associated with.</p>
   *
   */
  ResolverEndpointId?: string;

  /**
   *
   * 		       <p>This value is always <code>FORWARD</code>. Other resolver rule types aren't supported.</p>
   *
   */
  RuleType?: RuleTypeOption | string;

  /**
   *
   * 		       <p>Whether the rules is shared and, if so, whether the current account is sharing the rule with another account, or
   * 			another account is sharing the rule with the current account.</p>
   *
   */
  ShareStatus?: ShareStatus | string;

  /**
   *
   * 		       <p>A code that specifies the current status of the resolver rule.</p>
   *
   */
  Status?: ResolverRuleStatus | string;

  /**
   *
   * 		       <p>A detailed description of the status of a resolver rule.</p>
   *
   */
  StatusMessage?: string;

  /**
   *
   * 		       <p>An array that contains the IP addresses and ports that you want to forward </p>
   *
   */
  TargetIps?: Array<TargetAddress>;
}

export namespace ResolverRule {
  export function isa(o: any): o is ResolverRule {
    return _smithy.isa(o, "ResolverRule");
  }
}

/**
 *
 * 		       <p>In the response to an <a>AssociateResolverRule</a>,
 * 			<a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request,
 * 			information about an association between a resolver rule and a VPC.</p>
 *
 */
export interface ResolverRuleAssociation {
  __type?: "ResolverRuleAssociation";
  /**
   *
   * 		       <p>The ID of the association between a resolver rule and a VPC. Resolver assigns this value when you submit an
   * 			<a>AssociateResolverRule</a> request.</p>
   *
   */
  Id?: string;

  /**
   *
   * 		       <p>The name of an association between a resolver rule and a VPC.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The ID of the resolver rule that you associated with the VPC that is specified by <code>VPCId</code>.</p>
   *
   */
  ResolverRuleId?: string;

  /**
   *
   * 		       <p>A code that specifies the current status of the association between a resolver rule and a VPC.</p>
   *
   */
  Status?: ResolverRuleAssociationStatus | string;

  /**
   *
   * 		       <p>A detailed description of the status of the association between a resolver rule and a VPC.</p>
   *
   */
  StatusMessage?: string;

  /**
   *
   * 		       <p>The ID of the VPC that you associated the resolver rule with.</p>
   *
   */
  VPCId?: string;
}

export namespace ResolverRuleAssociation {
  export function isa(o: any): o is ResolverRuleAssociation {
    return _smithy.isa(o, "ResolverRuleAssociation");
  }
}

export enum ResolverRuleAssociationStatus {
  Complete = "COMPLETE",
  Creating = "CREATING",
  Deleting = "DELETING",
  Failed = "FAILED",
  Overridden = "OVERRIDDEN"
}

/**
 *
 * 		       <p>In an <a>UpdateResolverRule</a> request, information about the changes that you want to make.</p>
 *
 */
export interface ResolverRuleConfig {
  __type?: "ResolverRuleConfig";
  /**
   *
   * 		       <p>The new name for the resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console. </p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The ID of the new outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in
   * 			<code>TargetIps</code>.</p>
   *
   */
  ResolverEndpointId?: string;

  /**
   *
   * 		       <p>For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.</p>
   *
   */
  TargetIps?: Array<TargetAddress>;
}

export namespace ResolverRuleConfig {
  export function isa(o: any): o is ResolverRuleConfig {
    return _smithy.isa(o, "ResolverRuleConfig");
  }
}

export enum ResolverRuleStatus {
  Complete = "COMPLETE",
  Deleting = "DELETING",
  Failed = "FAILED",
  Updating = "UPDATING"
}

/**
 *
 * 		       <p>The resource that you tried to create already exists.</p>
 *
 */
export interface ResourceExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceExistsException";
  name: "ResourceExistsException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>For a <code>ResourceExistsException</code> error, the type of resource that the error applies to.</p>
   *
   */
  ResourceType?: string;
}

export namespace ResourceExistsException {
  export function isa(o: any): o is ResourceExistsException {
    return _smithy.isa(o, "ResourceExistsException");
  }
}

/**
 *
 * 		       <p>The resource that you tried to update or delete is currently in use.</p>
 *
 */
export interface ResourceInUseException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceInUseException";
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>For a <code>ResourceInUseException</code> error, the type of resource that is currently in use.</p>
   *
   */
  ResourceType?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return _smithy.isa(o, "ResourceInUseException");
  }
}

/**
 *
 * 		       <p>The specified resource doesn't exist.</p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>For a <code>ResourceNotFoundException</code> error, the type of resource that doesn't exist.</p>
   *
   */
  ResourceType?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 *
 * 		       <p>The specified resource isn't available.</p>
 *
 */
export interface ResourceUnavailableException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceUnavailableException";
  name: "ResourceUnavailableException";
  $fault: "client";
  Message?: string;
  /**
   *
   * 		       <p>For a <code>ResourceUnavailableException</code> error, the type of resource that isn't available.</p>
   *
   */
  ResourceType?: string;
}

export namespace ResourceUnavailableException {
  export function isa(o: any): o is ResourceUnavailableException {
    return _smithy.isa(o, "ResourceUnavailableException");
  }
}

export enum RuleTypeOption {
  Forward = "FORWARD",
  Recursive = "RECURSIVE",
  System = "SYSTEM"
}

export enum ShareStatus {
  NotShared = "NOT_SHARED",
  SharedByMe = "SHARED_BY_ME",
  SharedWithMe = "SHARED_WITH_ME"
}

/**
 *
 * 		       <p>One tag that you want to add to the specified resource. A tag consists of a <code>Key</code> (a name for the tag) and a <code>Value</code>.</p>
 *
 */
export interface Tag {
  __type?: "Tag";
  /**
   *
   * 		       <p>The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes,
   * 			the value of <code>Key</code> might be <code>account-id</code>.</p>
   *
   */
  Key?: string;

  /**
   *
   * 		       <p>The value for the tag. For example, if <code>Key</code> is <code>account-id</code>, then <code>Value</code> might be the ID of the
   * 			customer account that you're creating the resource for.</p>
   *
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the resource that you want to add tags to. To get the ARN for a resource, use the applicable
   * 			<code>Get</code> or <code>List</code> command: </p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <a>GetResolverEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetResolverRule</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetResolverRuleAssociation</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverEndpoints</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverRuleAssociations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverRules</a>
   *                </p>
   *             </li>
   *          </ul>
   *
   */
  ResourceArn: string | undefined;

  /**
   *
   * 		       <p>The tags that you want to add to the specified resource.</p>
   *
   */
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse extends $MetadataBearer {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return _smithy.isa(o, "TagResourceResponse");
  }
}

/**
 *
 * 		       <p>In a <a>CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.</p>
 *
 */
export interface TargetAddress {
  __type?: "TargetAddress";
  /**
   *
   * 		       <p>One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.</p>
   *
   */
  Ip: string | undefined;

  /**
   *
   * 		       <p>The port at <code>Ip</code> that you want to forward DNS queries to.</p>
   *
   */
  Port?: number;
}

export namespace TargetAddress {
  export function isa(o: any): o is TargetAddress {
    return _smithy.isa(o, "TargetAddress");
  }
}

/**
 *
 * 		       <p>The request was throttled. Try again in a few minutes.</p>
 *
 */
export interface ThrottlingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ThrottlingException";
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return _smithy.isa(o, "ThrottlingException");
  }
}

/**
 *
 * 		       <p>The specified resource doesn't exist.</p>
 *
 */
export interface UnknownResourceException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "UnknownResourceException";
  name: "UnknownResourceException";
  $fault: "client";
  Message?: string;
}

export namespace UnknownResourceException {
  export function isa(o: any): o is UnknownResourceException {
    return _smithy.isa(o, "UnknownResourceException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   *
   * 		       <p>The Amazon Resource Name (ARN) for the resource that you want to remove tags from. To get the ARN for a resource, use the applicable
   * 			<code>Get</code> or <code>List</code> command: </p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <a>GetResolverEndpoint</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetResolverRule</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetResolverRuleAssociation</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverEndpoints</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverRuleAssociations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListResolverRules</a>
   *                </p>
   *             </li>
   *          </ul>
   *
   */
  ResourceArn: string | undefined;

  /**
   *
   * 		       <p>The tags that you want to remove to the specified resource.</p>
   *
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse extends $MetadataBearer {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return _smithy.isa(o, "UntagResourceResponse");
  }
}

export interface UpdateResolverEndpointRequest {
  __type?: "UpdateResolverEndpointRequest";
  /**
   *
   * 		       <p>The name of the resolver endpoint that you want to update.</p>
   *
   */
  Name?: string;

  /**
   *
   * 		       <p>The ID of the resolver endpoint that you want to update.</p>
   *
   */
  ResolverEndpointId: string | undefined;
}

export namespace UpdateResolverEndpointRequest {
  export function isa(o: any): o is UpdateResolverEndpointRequest {
    return _smithy.isa(o, "UpdateResolverEndpointRequest");
  }
}

export interface UpdateResolverEndpointResponse extends $MetadataBearer {
  __type?: "UpdateResolverEndpointResponse";
  /**
   *
   * 		       <p>The response to an <code>UpdateResolverEndpoint</code> request.</p>
   *
   */
  ResolverEndpoint?: ResolverEndpoint;
}

export namespace UpdateResolverEndpointResponse {
  export function isa(o: any): o is UpdateResolverEndpointResponse {
    return _smithy.isa(o, "UpdateResolverEndpointResponse");
  }
}

export interface UpdateResolverRuleRequest {
  __type?: "UpdateResolverRuleRequest";
  /**
   *
   * 		       <p>The new settings for the resolver rule.</p>
   *
   */
  Config: ResolverRuleConfig | undefined;

  /**
   *
   * 		       <p>The ID of the resolver rule that you want to update.</p>
   *
   */
  ResolverRuleId: string | undefined;
}

export namespace UpdateResolverRuleRequest {
  export function isa(o: any): o is UpdateResolverRuleRequest {
    return _smithy.isa(o, "UpdateResolverRuleRequest");
  }
}

export interface UpdateResolverRuleResponse extends $MetadataBearer {
  __type?: "UpdateResolverRuleResponse";
  /**
   *
   * 		       <p>The response to an <code>UpdateResolverRule</code> request.</p>
   *
   */
  ResolverRule?: ResolverRule;
}

export namespace UpdateResolverRuleResponse {
  export function isa(o: any): o is UpdateResolverRuleResponse {
    return _smithy.isa(o, "UpdateResolverRuleResponse");
  }
}