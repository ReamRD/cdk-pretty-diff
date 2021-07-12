"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffValidator = exports.guardResourceDiff = exports.cdkDiffCategories = void 0;
exports.cdkDiffCategories = ['iamChanges', 'securityGroup', 'resources', 'parameters', 'metadata', 'mappings', 'conditions', 'outputs', 'unknown'];
exports.guardResourceDiff = (thing) => typeof thing === 'object' &&
    typeof thing.forEachDifference === 'function';
exports.diffValidator = (thing) => {
    if (typeof thing === 'object') {
        if (thing.length === 2) {
            const [diffCollectionKey, diffCollection] = thing;
            if (!exports.cdkDiffCategories.includes(diffCollectionKey)) {
                throw new Error(`unexpected diff category: ${diffCollectionKey}`);
            }
            if (typeof diffCollection === 'object' && diffCollection.hasOwnProperty('diffs')) {
                return { diffCollectionKey, diffCollection };
            }
        }
    }
    throw new Error(`invalid diff: ${JSON.stringify(thing, null, 2)}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRWEsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFVLENBQUM7QUFnQ3BKLFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxLQUFVLEVBQXVDLEVBQUUsQ0FDbkYsT0FBTyxLQUFLLEtBQUssUUFBUTtJQUN6QixPQUFPLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLENBQUM7QUFHbkMsUUFBQSxhQUFhLEdBQUcsQ0FBQyxLQUFVLEVBQXNILEVBQUU7SUFDOUosSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0QixNQUFNLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyx5QkFBaUIsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDbEQsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO2FBQ25FO1lBRUQsSUFBSSxPQUFPLGNBQWMsS0FBSyxRQUFRLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxDQUFDO2FBQzlDO1NBQ0Y7S0FDRjtJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckUsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2ZuRGlmZiBmcm9tICdAYXdzLWNkay9jbG91ZGZvcm1hdGlvbi1kaWZmJztcblxuZXhwb3J0IGNvbnN0IGNka0RpZmZDYXRlZ29yaWVzID0gWydpYW1DaGFuZ2VzJywgJ3NlY3VyaXR5R3JvdXAnLCAncmVzb3VyY2VzJywgJ3BhcmFtZXRlcnMnLCAnbWV0YWRhdGEnLCAnbWFwcGluZ3MnLCAnY29uZGl0aW9ucycsICdvdXRwdXRzJywgJ3Vua25vd24nXSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIENka0RpZmZDYXRlZ29yaWVzID0gdHlwZW9mIGNka0RpZmZDYXRlZ29yaWVzO1xuZXhwb3J0IHR5cGUgQ2RrRGlmZkNhdGVnb3J5ID0gQ2RrRGlmZkNhdGVnb3JpZXNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFN0YWNrUmF3RGlmZiA9IHsgXG4gIHN0YWNrTmFtZTogc3RyaW5nOyBcbiAgcmF3RGlmZjogY2ZuRGlmZi5UZW1wbGF0ZURpZmYsIFxuICBsb2dpY2FsVG9QYXRoTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IFxufTtcblxuZXhwb3J0IHR5cGUgTmljZXJEaWZmQ2hhbmdlID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBmcm9tOiBhbnk7XG4gIHRvOiBhbnk7XG4gIGFjdGlvbjogJ0FERElUSU9OJyB8ICdVUERBVEUnIHwgJ1JFTU9WQUwnO1xufVxuZXhwb3J0IHR5cGUgTmljZXJEaWZmID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBjZGtEaWZmUmF3OiBzdHJpbmc7XG4gIG5pY2VyRGlmZj86IHtcbiAgICBjZGtEaWZmQ2F0ZWdvcnk6IENka0RpZmZDYXRlZ29yeTtcbiAgICByZXNvdXJjZUFjdGlvbjogJ0FERElUSU9OJyB8ICdVUERBVEUnIHwgJ1JFTU9WQUwnO1xuICAgIHJlc291cmNlVHlwZTogc3RyaW5nO1xuICAgIHJlc291cmNlTGFiZWw6IHN0cmluZztcbiAgICBjaGFuZ2VzOiBOaWNlckRpZmZDaGFuZ2VbXTtcbiAgfVxufVxuZXhwb3J0IHR5cGUgTmljZXJTdGFja0RpZmYgPSB7XG4gIGRpZmY/OiBOaWNlckRpZmZbXTtcbiAgcmF3OiBzdHJpbmc7XG4gIHN0YWNrTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ3VhcmRSZXNvdXJjZURpZmYgPSAodGhpbmc6IGFueSk6IHRoaW5nIGlzIGNmbkRpZmYuUmVzb3VyY2VEaWZmZXJlbmNlID0+XG4gIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCcgJiZcbiAgdHlwZW9mIHRoaW5nLmZvckVhY2hEaWZmZXJlbmNlID09PSAnZnVuY3Rpb24nO1xuXG5cbmV4cG9ydCBjb25zdCBkaWZmVmFsaWRhdG9yID0gKHRoaW5nOiBhbnkpOiB7IGRpZmZDb2xsZWN0aW9uS2V5OiBDZGtEaWZmQ2F0ZWdvcnk7IGRpZmZDb2xsZWN0aW9uOiBjZm5EaWZmLkRpZmZlcmVuY2VDb2xsZWN0aW9uPGFueSwgY2ZuRGlmZi5EaWZmZXJlbmNlPGFueT4+IH0gPT4ge1xuICBpZiAodHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jykge1xuICAgIGlmICh0aGluZy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IFtkaWZmQ29sbGVjdGlvbktleSwgZGlmZkNvbGxlY3Rpb25dID0gdGhpbmc7XG4gICAgICBpZiAoIWNka0RpZmZDYXRlZ29yaWVzLmluY2x1ZGVzKGRpZmZDb2xsZWN0aW9uS2V5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgZGlmZiBjYXRlZ29yeTogJHtkaWZmQ29sbGVjdGlvbktleX1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkaWZmQ29sbGVjdGlvbiA9PT0gJ29iamVjdCcgJiYgZGlmZkNvbGxlY3Rpb24uaGFzT3duUHJvcGVydHkoJ2RpZmZzJykpIHtcbiAgICAgICAgcmV0dXJuIHsgZGlmZkNvbGxlY3Rpb25LZXksIGRpZmZDb2xsZWN0aW9uIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGRpZmY6ICR7SlNPTi5zdHJpbmdpZnkodGhpbmcsIG51bGwsIDIpfWApO1xufVxuICAiXX0=